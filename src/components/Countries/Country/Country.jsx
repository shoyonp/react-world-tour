import { useState } from "react";
import "./Country.css";
import CountryDetail from "../../CountryDetail/CountryDetail";
const Country = ({ country, handleVisetedCountry, handleVisitedFlags }) => {
  const { name, flags, population, area, cca3 } = country;

  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };
  //   const passWithParams = () => handleVisetedCountry(country);

  return (
    <div className={`country ${visited ? "visited" : "non-visited"}`}>
      <h3 style={{ color: visited ? "purple" : "white" }}>
        Name: {name?.common}
      </h3>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>area: {area}</p>
      <p>
        <small>Code: {cca3}</small>
      </p>
      <button onClick={() => handleVisetedCountry(country)}>
        Mark visited
      </button>
      <br />
      <button onClick={() => handleVisitedFlags(country.flags.png)}>
        Add Flag
      </button>
      <br />
      <button onClick={handleVisited}>{visited ? "Visited" : "going"}</button>
      <br />
      {visited ? "I have visited this country" : "I want to visit"}
      <hr />
      <CountryDetail
        country={country}
        handleVisetedCountry={handleVisetedCountry}
        handleVisitedFlags={handleVisitedFlags}
      ></CountryDetail>
    </div>
  );
};

export default Country;
