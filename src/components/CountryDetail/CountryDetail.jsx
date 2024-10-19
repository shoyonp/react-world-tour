import CountryData from "../CountryData/CountryData";

const CountryDetail = (props) => {
//   const { country, handleVisetedCountry, handleVisitedFlags } = props;
  return (
    <div>
      <h4>Country Detail</h4>
      <hr />
      {/* <CountryData
        country={country}
        handleVisetedCountry={handleVisetedCountry}
        handleVisitedFlags={handleVisitedFlags}
      ></CountryData> */}
      <CountryData {...props}></CountryData>
    </div>
  );
};

export default CountryDetail;
