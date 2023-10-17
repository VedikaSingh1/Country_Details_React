import React from "react";

const Country = ({ countryData }) => {
  if (!countryData) {
    return null; // Handle the case where data is not available yet
  }
  const renderCountryData = countryData.map((data, index) => {
    return (
      <article className={`country`} key={index}>
        <img
          className="country__img"
          src={data.flags.png}
          alt={`${data.name.common} Flag`}
        />
        <div className="country__data">
          <h3 className="country__name">{data.name.common}</h3>
          <p className="country__row">
            <span>🏢</span> Capital: {data.capital[0]}
          </p>
          <p className="country__row country__region">
            <span>🌍</span> Region: {data.region}
          </p>
          <p className="country__row">
            <span>🌍</span> Subregion: {data.subregion}
          </p>
          <p className="country__row">
            <span>👫</span> Population: {data.population}
          </p>
        </div>
      </article>
    );
  });
  return <>{renderCountryData};</>;
};

export default Country;
