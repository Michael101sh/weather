import React, { useContext } from "react";
import styled from "styled-components/macro";
import { GlobalContext } from "../../state/GlobalContext";
import { CelsiusIcon } from "../../styles-lib/icons";
import * as c from "../../styles-lib/colors";

const Forecast = () => {
  const { forecasts } = useContext(GlobalContext);

  return (
    <ForecastBox>
      {forecasts.map((forecast, index) => (
        <DayBox key={index}>
          <Day>{forecast.dayName}</Day>
          <TemperatureBox>
            <Temperature>{forecast.minMax} </Temperature>
            <CelsiusIcon />
          </TemperatureBox>
        </DayBox>
      ))}
    </ForecastBox>
  );
};

export default Forecast;

const ForecastBox = styled.div`
  color: black;
  display: flex;
  flex-wrap: wrap;
`;

const TemperatureBox = styled.div`
  display: flex;
  justify-content: center;
`;

const Temperature = styled.h1`
  font-size: 2rem;
`;

const Day = styled.h1`
  font-size: 3rem;
  color: #4dd0e1;
`;

const DayBox = styled.div`
  background-color: ${c.LIGHT_GREY};
  padding: 20px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 170px;
  height: 120px;
`;
