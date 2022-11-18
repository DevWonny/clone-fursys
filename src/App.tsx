import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./views/Main";

function App() {
  return (
    <Routes>
      <Route element={<Main />} path="/" />
    </Routes>
  );
}

export default App;
