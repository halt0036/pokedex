import React, { useContext, useState } from "react";
import Card from "../../components/Card/Card";
import applicationContext from "../../context/applicationContext";
import "./Pokemons.css";
import { useNavigate, useLocation } from "react-router-dom";
import { Drawer, Form } from "antd";

const Pokemons = () => {
  const { pokemons } = useContext(applicationContext);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [currentAluno, setCurrentAluno] = useState("");

  const showDrawer = (val) => {
    setCurrentAluno(val);
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="pokemons">
      {pokemons?.map((poke, index) => {
        return (
          <Card
            key={"pokemons" + poke.name}
            text={poke.name}
            index={index}
            onClick={() => showDrawer(poke.name)}
          />
        );
      })}
      <Drawer
        title={"Adicione um pokémon a um time"}
        placement={"bottom"}
        closable={false}
        onClose={onClose}
        open={open}
      ></Drawer>
    </div>
  );
};

export default Pokemons;
