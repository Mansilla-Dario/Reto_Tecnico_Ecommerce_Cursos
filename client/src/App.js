import React from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Inicio from "./pages/Inicio";
import AddorEditCourse from "./components/AddorEditCourse";
import SelectCourse from "./components/SelectCourse";

function App() {
  const [userActive, setUserActive] = React.useState(true);
  return (
    <>
      <Routes>
        <Route path="/" element={userActive ? <Inicio /> : <Login />} />
        <Route path="/add-course" element={userActive ? <AddorEditCourse /> : <Login />} />
        <Route path="/add-course/:id" element={userActive ? <AddorEditCourse /> : <Login />} />
        <Route path="/edit-course" element={userActive ? <SelectCourse motivo="editar"/> : <Login />} />
        <Route path="/remove-course" element={userActive ? <SelectCourse motivo="remover"/> : <Login />} />
      </Routes>
    </>
  );
}

export default App;
