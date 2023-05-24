import React, { useState } from "react";
import pokeball_white from "../../assets/img/pokeball-white.png";

const PokeOverview = ({
  flavor_text_sword,
  flavor_text_shield,
  flavor_text_default,
}) => {
  const [version, setVersion] = useState("sword");

  return (
    <>
      {/* Verifica se as informações de sabor de texto para Sword e Shield estão vazias */}
      {flavor_text_sword === "" && flavor_text_shield === "" ? (
        // Exibe o texto padrão se ambas estiverem vazias
        <h3 className="text-center text-md-left overview">
          {flavor_text_default}
        </h3>
      ) : (
        <>
          {/* Exibe o sabor de texto com base na versão selecionada */}
          <h3 className="text-center text-md-left overview">
            {version === "sword" ? flavor_text_sword : flavor_text_shield}
          </h3>

          {/* Seleção de versão */}
          <div className="container-versions d-flex justify-content-center justify-content-md-start mt-4">
            {/* Botão da versão Sword */}
            <button
              className={`${version === "sword" && version} mr-2`}
              onClick={() => setVersion("sword")}
            >
              <img src={pokeball_white} alt="pokeball" />
            </button>

            {/* Botão da versão Shield */}
            <button
              className={`${version === "shield" && version}`}
              onClick={() => setVersion("shield")}
            >
              <img src={pokeball_white} alt="pokeball" />
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default PokeOverview;
