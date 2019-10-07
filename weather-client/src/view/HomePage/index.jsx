import React, { useContext } from "react";
import styled from "styled-components/macro";
import { GlobalContext } from "../../state/GlobalContext";
import * as c from "../../styles-lib/colors";
import LocationsInput from "./LocationsInput";
import CurrentLocation from "./CurrentLocation";
import FavoritesButtons from "./FavoritesButtons";
import Forecast from "./Forecast";

const Home = () => {
  const { currentLocation } = useContext(GlobalContext);

  return (
    <Wrapper>
      <Title>Weather App</Title>
      <LocationsInput />
      {currentLocation.temperature !== -100 && (
        <MainBox>
          <TopMainBox>
            <CurrentLocation />
            <FavoritesButtons />
          </TopMainBox>
          <WeatherText>{currentLocation.WeatherText}</WeatherText>
          <Forecast />
        </MainBox>
      )}
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Title = styled.h1`
  color: ${c.GREY};
  font-family: "Yanone Kaffeesatz";
  font-weight: bold;
  font-size: 5rem;
  flex-basis: 100%;
  text-align: center;
  position: absolute;
  top: 23rem;
`;

const MainBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: white;
  width: 80vw;
  position: absolute;
  top: 35rem;
  padding: 1rem;
  margin-bottom: 3rem;
`;

const TopMainBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-basis: 100%;
  margin: 10px;
`;

const WeatherText = styled.h1`
  font-size: 4rem;
  text-align: center;
  margin-bottom: 1.5rem;
`;
