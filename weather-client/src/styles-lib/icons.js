import { WiCelsius } from "react-icons/wi";
import { MdLocationOn } from "react-icons/md";
import { FiX } from "react-icons/fi";
import styled from "styled-components/macro";
import * as c from "./colors";

export const CelsiusIcon = styled(WiCelsius)`
  font-size: 3rem;
  color: ${c.MID_GREY};
  position: relative;
  top: 0.4rem;
`;

export const MapMarkerIcon = styled(MdLocationOn)`
  position: absolute;
  font-size: 1.8rem;
  color: ${c.MID_GREY};
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
`;

export const CloseIcon = styled(FiX)`
  position: relative;
  font-size: 1.8rem;
  font-weight: 100;
  color: ${c.MID_GREY};
  top: 50%;
  right: 2rem;
  transform: translateY(-50%);
`;
