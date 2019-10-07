import React, { useContext } from "react";
import styled from "styled-components/macro";
import { GlobalContext } from "../../state/GlobalContext";
import { CelsiusIcon } from "../../styles-lib/icons";

const CurrentLocation = () => {
  const { currentLocation } = useContext(GlobalContext);

  return (
    <Box>
      <ImageContainer temperature={currentLocation.temperature} />
      <DataBox>
        <LocationName> {currentLocation.name} </LocationName>
        <TemperatureBox>
          <CurrTemperature>{currentLocation.temperature}</CurrTemperature>
          <CelsiusIcon />
        </TemperatureBox>
      </DataBox>
    </Box>
  );
};

export default CurrentLocation;

const Box = styled.div`
  display: flex;
  flex: 1;
`;

const ImageContainer = styled.div`
  background-image: ${({ temperature }) =>
    temperature > 17 ? `url("hot.jpg")` : `url("cold.jpg")`};
  background-color: #cccccc;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 150px;
  width: 150px;
`;

const DataBox = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LocationName = styled.h1`
  font-size: 4rem;
  font-family: "Yanone Kaffeesatz";
  color: #4dd0e1;
`;

const CurrTemperature = styled.h1`
  font-size: 3rem;
`;

const TemperatureBox = styled.div`
  display: flex;
  justify-content: center;
`;
