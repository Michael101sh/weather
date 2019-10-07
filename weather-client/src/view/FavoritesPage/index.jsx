import React, { useContext, useEffect } from "react";
import styled from "styled-components/macro";
import { GlobalContext } from "../../state/GlobalContext";
import { WiCelsius } from "react-icons/wi";
import * as c from "../../styles-lib/colors";
import { TLVBox } from "../../styles-lib/containers";

const Favorites = () => {
  const { favorites } = useContext(GlobalContext);

  useEffect(() => {}, [favorites]);

  return (
    <Wrapper>
      <Title> Favorites </Title>
      <Box>
        {favorites &&
          favorites.map((favorite, index) => (
            <FavoriteBox key={index}>
              <Name>{favorite.name}</Name>
              {favorite.temperature && (
                <TemperatureBox>
                  <Temperature>{favorite.temperature} </Temperature>
                  <CelsiusIcon />
                </TemperatureBox>
              )}
              <WeatherText>{favorite.WeatherText}</WeatherText>
            </FavoriteBox>
          ))}
      </Box>
    </Wrapper>
  );
};

export default Favorites;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Box = styled.div`
  /* margin-top: 7rem; */
  position: absolute;
  top: 27rem;
  color: black;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 80vw;
  flex-basis: 100%;
  background-color: white;
`;

const Title = styled.h1`
  color: ${c.GREY};
  font-size: 4.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1.5rem;
  position: absolute;
  top: 20rem;
  right: 45%;
  flex-basis: 100%;
`;

const TemperatureBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Name = styled.h1`
  font-size: 2.5rem;
  color: #4dd0e1;
`;

const Temperature = styled.h1`
  font-size: 2rem;
`;

const FavoriteBox = styled(TLVBox)`
  background-color: ${c.LIGHT_GREY};
  padding: 20px;
  margin: 10px;
  display: flex;
  justify-content: center;
`;

const CelsiusIcon = styled(WiCelsius)`
  font-size: 3rem;
  color: ${c.MID_GREY};
  position: relative;
  top: 0.4rem;
`;

const WeatherText = styled.h1`
  font-size: 2.5frem;
  text-align: center;
  flex-basis: 100%;
  width: 100%;
`;
