import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

// Componente de pesquisa
const Search = ({ history, query }) => {
  const [searchQuery, setSeachQuery] = useState(query || "");

  useEffect(() => {
    history.push(`/${searchQuery}`);
  }, [searchQuery]);

  return (
    // Container da pesquisa com margem inferior de 4 unidades
    <div className="container-search mb-4">
      <Form.Label>Nome ou ID do Pokémon</Form.Label>
      <div className="container-input-btn">
        {/* Input de pesquisa */}
        <input
          onChange={(e) => setSeachQuery(e.currentTarget.value)}
          value={searchQuery}
          placeholder="Ex. Bulbasaur"
        />
        {/* Botão de limpar pesquisa */}
        {searchQuery !== "" && (
          <button onClick={() => setSeachQuery("")} className="btn-clear">
            <FontAwesomeIcon icon={faTimes} color={"white"} />
          </button>
        )}
        
        {/* Botão para ir para a página inicial */}
        <button onClick={() => history.push('/index')} className="btn-custom">
          Pokedex
        </button>
      </div>
    </div>
  );
};

export default Search;
