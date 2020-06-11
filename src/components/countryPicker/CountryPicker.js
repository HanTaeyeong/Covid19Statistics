import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styled from "styled-components";
import { fetchCountries } from "../../api";

const FC = styled(FormControl)`
width:20%;
align-items:center;
justify-content:center;
left:40%;

`;

const NS = styled(NativeSelect)``;

const CountryPicker = ({handleState}) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchAPI();
  }, [setFetchedCountries]);

  if (!fetchedCountries) return;



  return (
    <FC>
      <NS defaultValue="" onChange={(e)=>{handleState(e.target.value)}}>
        <option value="">Global</option>
        {fetchedCountries.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </NS>
    </FC>
  );
};

export default CountryPicker;
