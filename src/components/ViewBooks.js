import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const ViewBooks = () => {
  var [books, setBooks] = useState([]);
  console.log(books);

  useEffect(() => {
    axios.get("http://localhost:4000/books").then((data) => {
      console.log(data);
      setBooks(data.data);
    });
  }, []);

  const deleteValues = (id) => {
    console.log(id);
    axios.delete("http://localhost:4000/books/"+id).then(() => {
        alert('Delete successfully')
    });
  };

  var view = (
    <TableContainer component={Paper} mt={5}>
      <Table align="center">
        <TableHead>
          <TableRow>
            <TableCell align="center">No</TableCell>
            <TableCell align="center">Genre</TableCell>
            <TableCell align="center">Author</TableCell>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Published</TableCell>
            <TableCell align="center">Published By</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map((value, index) => {
            return (
              <TableRow key={index}>
                <TableCell align="center">{index + 1}</TableCell>
                <TableCell align="center">{value.genre}</TableCell>
                <TableCell align="center">{value.author}</TableCell>
                <TableCell align="center">{value.booktitle}</TableCell>
                <TableCell align="center">{value.publishedby}</TableCell>
                <TableCell align="center">{value.published}</TableCell>
                <TableCell align="center">
                  <Button color="success">Update</Button>
                </TableCell>
                <TableCell align="center">
                  <Button color="error" onClick={()=>deleteValues(value.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
  return <div>{view}</div>;
};

export default ViewBooks;
