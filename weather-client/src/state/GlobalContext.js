import React, { useState } from "react";

const GlobalContext = React.createContext();
const { Provider } = GlobalContext;

const GlobalProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [locations, setLocations] = useState([]);
  const [currentLocation, setCurrentLocation] = useState({
    key: "",
    name: "",
    WeatherText: "",
    temperature: -100
  });
  const [forecasts, setForecasts] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // state = values to display
  const state = {
    open,
    locations,
    currentLocation,
    forecasts,
    favorites
  };
  // actions = callbacks to invoke
  const actions = {
    setOpen,
    setLocations,
    setCurrentLocation,
    setForecasts,
    setFavorites
  };

  return <Provider value={{ ...state, ...actions }}> {children} </Provider>;
};

export { GlobalProvider, GlobalContext };
