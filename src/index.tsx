import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { DashboardProvider } from "./contexts/contextDashboard";
import { GlobalStyle } from "./styles/global";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DashboardProvider>
        <GlobalStyle />
        <App />
      </DashboardProvider>
    </BrowserRouter>
  </React.StrictMode>
);
