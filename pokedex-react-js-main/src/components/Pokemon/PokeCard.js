import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { GetImageById } from "../../functions/utils";
import pokemon_placeholder from "../../assets/img/pokemon-placeholder.png";


const PokeCard = ({ name, id, types, click }) => {
  const [error, setError] = useState(false); // Estado para controlar erros

  const [manualImage, setManualImage] = useState(""); // Estado para a imagem manual

  useEffect(() => {
    setError(false); // Redefinir erro ao mudar o ID
  }, [id]);

  const handleManualImageChange = (event) => {
    setManualImage(event.target.value); // Atualizar o estado da imagem manual
  };

  const handleManualImageSubmit = (event) => {
    event.preventDefault();
    if (manualImage) {
      setError(false); // Se houver uma imagem manual, redefinir erro
    } else {
      setError(true); // Se não houver uma imagem manual, definir erro
    }
  };

  return (
    <div className="container-card mb-4">
      <div>
        <div className="text-center">
          <h2 className="pokemon-name limit-text my-0">{name}</h2>
          <p className="pokemon-number mb-0">
            # {id.toString().padStart(3, "0")}
          </p>
        </div>
      </div>
      <figure
        className={`container-card-img position-relative my-4 container-${types[0].type.name}`}
      >
        <Link to={click ? `/details/${name}` : "javascript:void"}>
          {error ? (
            <img alt={name} title={name} src={pokemon_placeholder} />
          ) : (
            <img
              onError={(e) => setError(true)}
              className="animation-up-down"
              alt={name}
              title={name}
              src={manualImage || GetImageById(id)}

            />
          )}
        </Link>
      </figure>
      <div className="w-100  d-flex justify-content-between">
        {types.map((item, index) => {
          return (
            <div
              key={index}
              className={` 
                  ${item.type.name}
                  type-item ${types.length == 1 && "w-100"}`}
            >
              <p className="mb-0 text-uppercase">{item.type.name}</p>
            </div>
          );
        })}
      </div>
      <form onSubmit={handleManualImageSubmit}>
        <input
          type="text"
          value={manualImage}
          onChange={handleManualImageChange}
          placeholder="link da imagem"
        />
        <button type="submit" className="button-update">Atualizar Foto</button>
      </form>
    </div>
  );
};

export default PokeCard;
