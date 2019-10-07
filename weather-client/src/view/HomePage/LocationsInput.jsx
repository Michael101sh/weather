import React, { useContext, useRef } from "react";
import styled from "styled-components/macro";
import { GlobalContext } from "../../state/GlobalContext";
import * as c from "../../styles-lib/colors";
import { TLVBox, HBox } from "../../styles-lib/containers";
import { MapMarkerIcon, CloseIcon } from "../../styles-lib/icons";
import {
  getLocationData,
  getCurrentWeather,
  getFiveDayForecast
} from "../../services/weather.service";
import {
  epochDateToDayName,
  fahrenheitToCelsius,
  extractLocationsData
} from "../../logic/LocationsInput.logic";

const LocationsInput = () => {
  const {
    open,
    setOpen,
    locations,
    setLocations,
    currentLocation,
    setCurrentLocation,
    setForecasts
  } = useContext(GlobalContext);
  const input = useRef(null);

  const onChange = async () => {
    const locationName = input.current.value;
    if (locationName !== "") {
      const results = await getLocationData(locationName);
      if (results) {
        if (results.length > 0) {
          let arr = extractLocationsData(results);
          setLocations(arr);
          setOpen(true);
        }
      }
    } else {
      setLocations([]);
      setOpen(false);
      setCurrentLocation({
        ...currentLocation,
        temperature: -100
      });
    }
  };

  const LocationOnClick = async event => {
    event.persist();
    setOpen(false);
    const locationKey = await createCurrentLocation(event);
    if (locationKey) {
      await createForecast(locationKey);
    }
  };

  const createCurrentLocation = async event => {
    const locationName = event.target.textContent;
    input.current.value = locationName;
    const location = locations.find(location => location.name === locationName);
    const currentWeather = await getCurrentWeather(location.key);
    if (currentWeather) {
      location.WeatherText = currentWeather[0].WeatherText;
      location.temperature = Math.round(
        currentWeather[0].Temperature.Metric.Value
      );
      setCurrentLocation(location);
      return location.key;
    } else {
      return null;
    }
  };

  const createForecast = async locationKey => {
    const result = await getFiveDayForecast(locationKey);
    let forecasts = [];
    if (result) {
      for (const forecast of result.DailyForecasts) {
        const dayName = epochDateToDayName(forecast.EpochDate);
        let minTemperatue = Math.round(
          fahrenheitToCelsius(forecast.Temperature.Minimum.Value)
        );
        let maxTemperature = Math.round(
          fahrenheitToCelsius(forecast.Temperature.Maximum.Value)
        );
        forecasts.push({
          dayName,
          min: minTemperatue,
          max: maxTemperature,
          minMax: maxTemperature + " / " + minTemperatue
        });
      }
      setForecasts(forecasts);
    } else {
      console.log("You need to get a new ACUU WEATHER API key");
    }
  };

  return (
    <Box>
      <Input
        open={open}
        ref={input}
        placeholder="Anywhere"
        type="text"
        name="location"
        onChange={onChange}
        required
        autoFocus
      />
      <CloseIcon
        onClick={() => {
          input.current.value = "";
          setLocations([]);
          setOpen(false);
          setCurrentLocation({
            ...currentLocation,
            temperature: -100
          });
        }}
      />
      {open && locations && (
        <Dropdown>
          {locations.map(location => (
            <Option
              {...location}
              key={location.key}
              onClick={LocationOnClick}
            />
          ))}
        </Dropdown>
      )}
    </Box>
  );
};

export default LocationsInput;

const Option = ({ name, onClick }) => {
  return (
    <OptionBox onClick={onClick}>
      <MapMarkerIcon />
      <OptionLabel>{name}</OptionLabel>
    </OptionBox>
  );
};

const Box = styled.div`
  position: relative;
  top: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-basis: 100%;
`;

const Input = styled.input`
  width: 600px;
  color: ${c.GREY};
  letter-spacing: normal;
  font-size: 1.8rem;
  font-weight: 300;
  padding: 1rem;
  border-radius: 0.4rem;
  border: 1px solid ${({ open }) => (open ? c.GREEN : c.LIGHT_GREY)};
  border-bottom: none;
  outline: none;
`;

const Dropdown = styled(TLVBox)`
  border: ${c.GREEN} 1px solid;
  border-radius: 0.4rem;
  position: absolute;
  top: 4rem;
  right: 1.8rem;
  width: 600px;
  margin-bottom: 2rem;
  cursor: pointer;
  z-index: 1;
`;

const OptionBox = styled(HBox)`
  width: 100%;
  position: relative;
  background: white;
  opacity: 0.7;
  padding: 0.7rem 4rem;
  justify-content: flex-start;
  &:hover {
    background-color: #4dd0e1;
  }
`;

const OptionLabel = styled.h2`
  text-align: left;
  color: black;
`;
