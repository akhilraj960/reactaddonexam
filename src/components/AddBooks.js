import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AddBooks = () => {
  var [book, setBook] = useState();

  const inputHandler = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const formsubmit = ()=>{
    axios.post('http://localhost:4000/Books').then(()=>{
        alert('success')
    }
    )
  }

  return (
    <>
      <br />
      <br />
      <TextField
        label="genre"
        name="genre"
        variant="outlined"
        onChange={inputHandler}
      ></TextField>
      <br />
      <br />

      <TextField
        label="author"
        name="author"
        variant="outlined"
        onChange={inputHandler}
      ></TextField>
      <br />
      <br />
      <TextField
        label="boot title"
        name="boottitle"
        variant="outlined"
        onChange={inputHandler}
      ></TextField>
      <br />
      <br />
      <TextField
        label="published"
        name="published"
        variant="outlined"
        onChange={inputHandler}
      ></TextField>
      <br />
      <br />
      <TextField
        label="publishedby"
        name="publishedby"
        onChange={inputHandler}
        variant="outlined"
      ></TextField>
      <br />
      <br />

      <Button onClick={formsubmit}>Submit</Button>
      <ToastContainer />
    </>
  );
};

export default AddBooks;
