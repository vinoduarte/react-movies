import React from "react";
import ReactDOM from "react-dom/client";
import { Routes } from "./routes";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/global.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles></GlobalStyles>
      <Routes />
    </ThemeProvider>
  </React.StrictMode>
);
