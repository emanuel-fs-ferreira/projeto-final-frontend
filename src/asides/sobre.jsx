import React from "react";
import Rodape from "./rodape";

function Sobre() {
  return (
    <div>
      <header>
        <h1>Sobre</h1>
      </header>
      <hr />
      <main>
        <h2>Emanuel Felipe</h2>
        <p>
          Olá, sou o Emanuel Felipe. Tenho 18 anos e moro em Itabira - MG; gosto
          de esportes, principalmente basquete, vôlei e xadrez, gosto de
          tecnologia em geral e também de me desafiar sempre que posso.
        </p>
      </main>
      <hr />
      <element>
        <Rodape/>
      </element>
    </div>
  );
}

export default Sobre