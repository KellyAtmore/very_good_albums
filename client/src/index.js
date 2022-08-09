import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App";
import AlbumsList from "./components/AlbumsList";
import AlbumPage from "./components/AlbumPage";
import ScrollToTop from "./components/ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/albums" element={<AlbumsList />} />
        <Route path="/albums/:id" element={<AlbumPage />} />

        {/* <Route index element={<Home />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
