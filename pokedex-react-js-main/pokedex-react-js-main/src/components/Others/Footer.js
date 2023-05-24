import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./styles.css";

// Componente do rodapé
const Footer = () => {
  return (
    // Rodapé com margem superior de 5 unidades
    <footer className="mt-5">
      <div className="d-flex justify-content-center align-items-center">
        {/* Créditos do desenvolvedor */}
        <p className="mr-1 credits-text">Desenvolvido por</p>
        {/* Link para o perfil do desenvolvedor no Github */}
        <a className="mhq" target="_blank" href="https://github.com/GustavoSilva29/pokedexreact">
          Gustavo Silva
        </a>
      </div>
      {/* Link para ver o código no Github */}
      <a>
        Veja o codigo no Github
        {/* Ícone do Github */}
        <FontAwesomeIcon className="ml-2" icon={faGithub} />
      </a>
    </footer>
  );
};

export default Footer;
