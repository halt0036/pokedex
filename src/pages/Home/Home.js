import React from "react";
import homeBackground from "../../assets/wallpaper.jpeg";
import Button from "../../components/Button/Button";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home" style={{ backgroundImage: `url(${homeBackground})` }}>
      <div className="home-title">
        <h1>POKÉDEX</h1>
        <span className="home-buttons">
          <Button text="Contato" />
          <Button
            text="Acessar"
            variant="fill"
            onClick={() => navigate("/cursos")}
          />
        </span>
      </div>
    </div>
  );
};

export default Home;
