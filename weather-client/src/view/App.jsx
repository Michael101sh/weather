import React, { useContext, useEffect } from "react";
import styled from "styled-components/macro";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyles from "../styles-lib/global.styles";
import TopBar from "./GeneralContent/TopBar";
import Menu from "./GeneralContent/Menu";
import HomePage from "./HomePage";
import FavoritesPage from "./FavoritesPage";
import NoMatch from "./GeneralContent/NoMatch";
import Credit from "./Credit";
import { getFavoriteLocations } from "../services/weather.service";
import { GlobalContext } from "../state/GlobalContext";

function App() {
  const { setFavorites } = useContext(GlobalContext);

  useEffect(() => {
    async function fetchData() {
      setFavorites(await getFavoriteLocations());
    }
    fetchData();
  }, []);

  return (
    <Router>
      <Box>
        <TopBar>
          <Menu />
        </TopBar>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/favorites" component={FavoritesPage} />
          <Route component={NoMatch} />
        </Switch>
        <GlobalStyles />
        <Credit />
      </Box>
    </Router>
  );
}

export default App;

const Box = styled.div`
  height: 100%;
  width: 100%;
`;
