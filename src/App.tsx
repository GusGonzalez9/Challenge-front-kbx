import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Nav } from "./components/Nav/Nav";
import images from "./images.jpeg";

function App() {
  return (
    <div className="App">
      <div className="headerContainer">
        <Nav
          items={["Personajes", "Insigths", "Configuración", "Login"]}
          image={""}
        />
      </div>
      <div className="bodyContent">
        <div className="description">
          <h2 className="title">Rick and Morty</h2>
          <p className="contentDescription">
            Después de haber estado desaparecido durante casi 20 años, Rick
            Sánchez llega de imprevisto a la puerta de la casa de su hija Beth y
            se va a vivir con ella y su familia utilizando el garaje como su
            laboratorio personal
          </p>
        </div>
        <div className="imageContainer">
          <img src={images} height='400px'/>
        </div>
      </div>
    </div>
  );
}

export default App;
