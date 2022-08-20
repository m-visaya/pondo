import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PondoMain from "./components/Pondo Page/pondo_main";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="crowdfund/:address" element={<PondoMain />}></Route>
      <Route path="*" element={<h1>There's nothing here!</h1>} />
    </Routes>
  </BrowserRouter>
);
