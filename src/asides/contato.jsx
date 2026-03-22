import React from "react";
import { useNavigate } from "react-router-dom";
import Rodape from "./rodape";

function Contato() {
  const navigate = useNavigate();

  return (
    <div>
      <header>
        <h1>Contato</h1>
        <hr />
      </header>
      <main>
        <h3>Feito por Emanuel Felipe</h3>
        <p>
          Redes:
          <ul>
            <li>
              Instagram: <a href="instagram.com.br/emanuel.fsf" target="_blank" rel="noopener noreferrer">emanuel.fsf</a>
            </li>
            <li>
              X: <a href="x.com.br/emanuel.fsf">emanuel.fsf</a>
            </li>
          </ul>
        </p>
      </main>
      <hr/>
      <element>
        <Rodape/>
      </element>
    </div>
  );
}

export default Contato;
