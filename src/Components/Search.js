import React from "react";
import {useState} from 'react';
import MockData from "./MOCK_DATA.json";
function Search() {
    const [searchTerm, setsearchTerm] = useState("")
  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search"
        className="form-control"
        style={{ marginTop: 50, marginBottom: 20, width: "40%" }}
        onChange = {(e) => {
            setsearchTerm(e.target.value);
        }}
      />
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th>SL no</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {MockData.filter(val => {
              if (searchTerm === ''){
                  return val;
              } else if (
                  val.first_name.toLowerCase().includes(searchTerm.toLowerCase())||
                  val.last_name.toLowerCase().includes(searchTerm.toLowerCase())
              ){
                  return val;
              }
          }).map((m) => (
            <tr key={m.id}>
              <td>{m.id}</td>
              <td>{m.first_name}</td>
              <td>{m.last_name}</td>
              <td>{m.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Search;
