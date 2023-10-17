import React, { useState } from "react";
const Search = ({ setInputValue }) => {
  const [input, setInput] = useState("");
  return (
    <main className="container">
      <div className="search">
        <input
          type="text"
          id="countryInput"
          placeholder="Search by country"
          onChange={(event) => {
            setInput(event.target.value);
          }}
          required
        />
        <button
          onClick={(event) => {
            setInputValue(input);
          }}
          className="btn-search"
        ></button>
      </div>
    </main>
  );
};

export default Search;
