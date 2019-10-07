import React, { useContext } from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../state/GlobalContext";
import { Button } from "../../styles-lib/containers";
import {
  addFavoriteLocation,
  getFavoriteLocations
} from "../../services/weather.service";

const FavoritesButtons = () => {
  const { setFavorites, currentLocation } = useContext(GlobalContext);

  return (
    <Box>
      <Button
        onClick={async () => {
          const res = await addFavoriteLocation(currentLocation);
          if (res) {
            if (res.data !== "ok") {
              alert(res.data);
            } else {
              setFavorites(await getFavoriteLocations());
              alert("Added to Favorites");
            }
          } else {
            alert("Error occured");
          }
        }}
      >
        Add to Favorites
      </Button>
      <StyledLink to="/favorites">
        <Button> Favorites Page</Button>
      </StyledLink>
    </Box>
  );
};

export default FavoritesButtons;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-end;
`;

const StyledLink = styled(Link)`
  color: mintcream;
  text-decoration: none;
`;
