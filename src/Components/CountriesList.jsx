import { useState, useEffect } from 'react';
import axios from 'axios'; 
import React from 'react';
import { Link } from 'react-router-dom';


function CountriesList() {
    const [countries, setCountries] = useState([]);
  const [fetching, setFetching] = useState(true);

  const getCountries = async () => {
    try {
      const response = await axios.get('https://ih-countries-api.herokuapp.com/countries');
      const countries = response.data;
      setCountries(countries);
      setFetching(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCountries();
  }, []);
  if (fetching) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div>
        {countries.map((countries) => {
          return (
            <div key={countries.name} className="countrieslist">
            <Link to={`/${countries.alpha3Code}`}><p>{countries.name.common}</p></Link>
          </div>
          );
        })}
      </div>
    );
  }
}

export default CountriesList;

