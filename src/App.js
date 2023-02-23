import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Cursos from "./pages/Pokemons/Pokemons";
import GlobalContext from "./context";

function App() {
  return (
    <div className="app">
      <GlobalContext>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cursos" element={<Cursos />} />
          </Routes>
        </BrowserRouter>
      </GlobalContext>
    </div>
  );
}

export default App;
