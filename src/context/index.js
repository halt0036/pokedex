import React, { useEffect, useState } from "react";
import ApplicationContext from "./applicationContext";
import fakeData from "./data.json";
import api from "../services/api";

const GlobalContext = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [times, setTimes] = useState([]);

  useEffect(() => {
    api
      .get("/pokemon")
      .then((response) => {
        setPokemons(response.data.results);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  const fetchData = () => {
    setTimes(fakeData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ApplicationContext.Provider
      value={{
        pokemons,
        times,
        setPokemons,
        setTimes,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};

export default GlobalContext;
