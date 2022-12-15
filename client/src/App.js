import React from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Inicio from "./pages/Inicio";

function App() {
  const [userActive, setUserActive] = React.useState(true);
  return (
    <>
      <Routes>
        <Route path="/" element={userActive ? <Inicio /> : <Login />} />
      </Routes>
    </>
  );
}

export default App;
