import { createGlobalStyle } from "styled-components";
import * as c from "../styles-lib/colors";

const GlobalStyles = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css?family=Expletus+Sans|Raleway|Griffy|Yanone+Kaffeesatz:400,700");
    @import url("https://fonts.googleapis.com/css?family=Open+Sans:400italic,400,300,600");

    html {
      font-size: 10px;
      height: 100%;
    }
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      font-family:"Open Sans", Helvetica, Arial, sans-serif;
      font-weight:300;
      color: #777;
      background-image: url('‏‏woman-feeling-cold.png');
      background-color: ${c.GREY};
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      position: relative;
      /* background-attachment: fixed; */
      height: 100%;
    }
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
	    text-rendering: optimizeLegibility;
    }
    li {
      list-style-type: none;
    }
`;

export default GlobalStyles;
