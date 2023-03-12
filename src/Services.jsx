import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "./styles/Button";

const Services = () => {
  const [weatherData, setWeatherData] = useState(null);

  // ----------------------------------------------------------------

  // =================================================================

  // useEffect(() => {
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       "X-RapidAPI-Key": "ba770ca614msh2e876f9de8f94cap159025jsn5ac62d655faa",
  //       "X-RapidAPI-Host": "meteostat.p.rapidapi.com",
  //     },
  //   };

  //   fetch(
  //     "https://meteostat.p.rapidapi.com/stations/hourly?station=10637&start=2020-01-01&end=2020-01-01&tz=Europe%2FBerlin",
  //     options
  //   )
  //     .then((response) => response.json())
  //     .then((data) => setWeatherData(data))
  //     .catch((error) => console.error(error));
  // }, []);

  return (
    <Wrapper className="section">
      <h2 className="common-heading">World bank Data</h2>
      <div className="grid grid-two-column data-style">
      <iframe
        src="https://data.worldbank.org/share/widget?indicators=EN.ATM.CO2E.KT&topics=%5Bobject%20Object%5D"
        width='550' 
        height='400' 
        frameBorder="0"
        scrolling="no"
        // width="100%"
        // height="450"
        // style={{ border: 0 }}
        // allowFullScreen=""
        // loading="lazy"
        referrerPolicy="auto"
      ></iframe>
      <iframe
        src="https://data.worldbank.org/share/widget?end=2019&indicators=EN.ATM.CO2E.PC&start=1990"
        width='550' 
        height='400' 
        frameBorder="0"
        scrolling="no"
      ></iframe>
      <iframe
        src="https://data.worldbank.org/share/widget?end=2022&indicators=EN.ATM.NOXE.KT.CE&start=2000"
        width='550' 
        height='400'
        frameBorder="0"
        scrolling="no"
      ></iframe>
      <iframe
        src="https://data.worldbank.org/share/widget?end=2022&indicators=EN.ATM.METH.KT.CE&start=2000"
        width='550' 
        height='400'
        frameBorder="0"
        scrolling="no"
      ></iframe>
      <iframe
        src="https://data.worldbank.org/share/widget?end=2022&indicators=AG.LND.FRST.K2&start=2000"
        width='550' 
        height='400'
        frameBorder="0"
        scrolling="no"
      ></iframe>
      <iframe
        src="https://data.worldbank.org/share/widget?end=2022&indicators=AG.LND.FRST.ZS&start=2000"
        width='550' 
        height='400'
        frameBorder="0"
        scrolling="no"
      ></iframe>
      <iframe
        src="https://data.worldbank.org/share/widget?end=2022&indicators=EG.USE.ELEC.KH.PC&start=2000"
        width='550' 
        height='400'
        frameBorder="0"
        scrolling="no"
      ></iframe>
      <iframe
        src="https://data.worldbank.org/share/widget?end=2020&indicators=AG.LND.AGRI.ZS&start=1961&view=chart"
        width='550' 
        height='400'
        frameBorder="0"
        scrolling="no"
      ></iframe>
      </div>
      ;
      <div className="container grid grid-three-column">
        {weatherData && (
          <WeatherDataContainer>
            <h3>Weather data for station {weatherData.meta.name}</h3>
            <ul>
              {weatherData.data.map((record) => (
                <li key={record.time}>
                  {record.time}: {record.temperature}°C
                </li>
              ))}
            </ul>
          </WeatherDataContainer>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 2rem;
  background-color: #f2f2f2;
`;

const WeatherDataContainer = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin-bottom: 0.5rem;
      font-size: 1.2rem;
      color: #666;
    }
  }
  
  data-style{
    background: "#fff";
    d@media (min-width: 768px)
    .minicard-area.topic .chart-list li:nth-child(4n) {
        margin-right: 0px;
    }
    @media (min-width: 768px)
    .minicard-area.topic .chart-list li:nth-child(2n) {
        margin-right: 1.5%;
    }
    @media (min-width: 768px)
    .minicard-area.topic .chart-list li {
        width: 23.82%;
    }
`;

export default Services;
