const CountryData = ({ country, handleVisetedCountry, handleVisitedFlags }) => {

    console.log('insude country data', country, handleVisetedCountry,handleVisitedFlags);

  return (
    <div>
      <p>
        <small>Country Data: {country.name.common}</small>
      </p>
    </div>
  );
};

export default CountryData;
