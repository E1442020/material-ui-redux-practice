import React, { useState } from "react";
import { showName, showAddress, showAge } from "./infoSlice";
import { useSelector, useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import "./info.css";

export default function Info() {
  const count = useSelector((state) => state.info);
  const dispatch = useDispatch();
  let [nameValue, setNameValue] = useState("");
  let [addressValue, setAddressValue] = useState("");
  let [ageValue, setAgeValue] = useState("");
  const [showInfo, setShowInfo] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      (nameValue.trim() == null) | (nameValue.trim() == "") ||
      (ageValue.trim() == null) | (ageValue.trim() == "") ||
      (addressValue.trim() == null) | (addressValue.trim() == "")
    )
      return;
    dispatch(showName(nameValue));
    dispatch(showAddress(addressValue));
    dispatch(showAge(ageValue));
    setShowInfo(true);
    setNameValue("");
    setAddressValue("");
    setAgeValue("");
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <Stack spacing={2} className="stack">
          <TextField
            required
            id="outlined-required"
            label="Enter Your Name"
            value={nameValue}
            onChange={(e) => setNameValue(e.target.value)}
          />
          <TextField
            required
            id="outlined-number"
            label="Enter Your Age"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            value={ageValue}
            onChange={(e) => setAgeValue(e.target.value)}
          />
          <TextField
            required
            id="outlined-required"
            label="Enter Your Address"
            value={addressValue}
            onChange={(e) => setAddressValue(e.target.value)}
          />
          <Button variant="contained" type="submit">
            show information
          </Button>
        </Stack>
      </form>
      {showInfo ? (
        <>
          <Stack spacing={3} className="info">
            <h3>Hi sir your information is:</h3>
            <p>Name: {count.name}</p>
            <p>Address: {count.address}</p>
            <p>Age: {count.age}</p>
          </Stack>
        </>
      ) : (
        ""
      )}
    </>
  );
}
