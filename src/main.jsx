import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PondoInfo from "./components/Pondo/pondo_ui";
import DonateUI from "./components/Donate/donate_ui";
import CreatePondoUI from "./components/Create Pondo/create_pondo_ui";
import Dashboard from "./components/Dashboard/dashboard_ui";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="crowdfund/:address" element={<PondoInfo />}></Route>
      <Route path="donate/:address" element={<DonateUI />}></Route>
      <Route path="create" element={<CreatePondoUI />}></Route>
      <Route path="mypondos" element={<Dashboard />}></Route>
      <Route path="*" element={<h1>There's nothing here!</h1>} />
    </Routes>
  </BrowserRouter>
);
