import React, { useState, useEffect } from "react";
import "./App.css";
import Search from "./searchCountry";
import Country from "./renderCountry";
import Countries from "./countries";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [countryData, setCountryData] = useState([]);
  useEffect(() => {
    if (inputValue.length > 0) {
      async function countryName(country) {
        try {
          const apiUrl = `https://restcountries.com/v3.1/name/${country}`;

          const response = await fetch(apiUrl);
          if (!response.ok) {
            throw new Error(`Error. Status: ${response.status}`);
          }

          const data = await response.json();
          setCountryData(data);
        } catch (error) {
          console.log("Error");
          throw error;
        }
      }
      countryName(inputValue);
    }
  }, [inputValue]);

  return (
    <div className="App">
      <div className="gridContainer">
        <Search setInputValue={setInputValue} />
        <Country countryData={countryData} />
        <Countries />
      </div>
    </div>
  );
}

export default App;
