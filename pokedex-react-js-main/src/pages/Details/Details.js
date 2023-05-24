import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import LoadingDetails from "../../components/Loading/LoadingDetails";
import Header from "../../components/Header/Header";
import PokeCard from "../../components/Pokemon/PokeCard";
import PokeOverview from "../../components/Pokemon/PokeOverview";
import PokeInfo from "../../components/Pokemon/PokeInfo";
import PokeStats from "../../components/Pokemon/PokeStats";
import PokeEvolution from "../../components/Pokemon/PokeEvolution";
import Footer from "../../components/Others/Footer";
import ModalError from "../../components/Others/ModalError";
import api from "../../services/api";
import axios from "axios";

function Details({ history, ...props }) {
  const { name } = props.match.params;

  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState({});
  const [showModalError, setShowModalError] = useState(false);

  useEffect(() => {
    function LoadPokemon() {
      api
        .get(`/pokemon/${name}`)
        .then((response) => {
          if (response.status == 200) {
            LoadSpecies(response.data);
          }
        })
        .catch((error) => {
          setShowModalError(true);
        });
    }

    if (name == undefined) history.push({ pathname: "/" });
    window.scrollTo(0, 0);
    LoadPokemon();
  }, [window.location.pathname]);

  async function LoadSpecies(poke) {
    try {
      let pokeSpecies = await api.get(`/pokemon-species/${name}`);
      let pokeEvolution = await axios.get(pokeSpecies.data.evolution_chain.url);

      var flavor_text_sword = "";
      var flavor_text_shield = "";
      var flavor_text_default = "";
      pokeSpecies.data.flavor_text_entries.map((item) => {
        if (item.language.name != "en") return false;
        if (item.version.name == "sword") {
          flavor_text_sword = item.flavor_text;
        } else if (item.version.name == "shield") {
          flavor_text_shield = item.flavor_text;
        }
        flavor_text_default = item.flavor_text;
      });

      var abilities = "";
      poke.abilities.map((item, index) => {
        abilities += `${item.ability.name}${
          poke.abilities.length == index + 1 ? "" : ", "
        }`;
      });

      var obj = {
        id: poke.id,
        name: poke.name,
        types: poke.types,
        flavor_text_sword,
        flavor_text_shield,
        flavor_text_default,
        height: poke.height,
        weight: poke.weight,
        abilities,
        gender_rate: pokeSpecies.data.gender_rate,
        capture_rate: pokeSpecies.data.capture_rate,
        habitat: pokeSpecies.data.habitat?.name,
        stats: poke.stats,
        evolution: pokeEvolution.data.chain,
      };

      setDetails(obj);
      setLoading(false);
    } catch (error) {
      setShowModalError(true);
    }
  }

  return (
    <div>
      <Header />

      {/* ModalError - Modal para exibir mensagens de erro */}
      <ModalError
        history={history}
        show_modal_error={showModalError}
        msg={"Ops! Não foi possível carregar as informações para este pokémon."}
      />

      <Container fluid className="text-light mb-4">
        {loading ? (
          <LoadingDetails /> // Exibe um componente de carregamento enquanto os detalhes estão sendo carregados
        ) : (
          <>
            <Row>
              <Col xs={12} md={6}>
                {/* PokeCard - Exibe informações básicas do pokemon */}
                <PokeCard
                  name={details.name}
                  id={details.id}
                  types={details.types}
                  click={false}
                />
              </Col>

              <Col xs={12} md={6}>
                {/* PokeOverview - Exibe uma visão geral do pokemon, incluindo texto de descrição */}
                <PokeOverview
                  flavor_text_sword={details.flavor_text_sword}
                  flavor_text_shield={details.flavor_text_shield}
                  flavor_text_default={details.flavor_text_default}
                />

                {/* PokeInfo - Exibe informações adicionais sobre o pokemon, como altura, peso, habilidades, taxa de gênero e habitat */}
                <PokeInfo
                  height={details.height}
                  capture_rate={details.capture_rate}
                  weight={details.weight}
                  abilities={details.abilities}
                  gender_rate={details.gender_rate}
                  habitat={details.habitat}
                />
              </Col>

              <Col xs={12}>
                {/* PokeStats - Exibe as estatísticas do pokemon */}
                <PokeStats stats={details.stats} types={details.types} />
              </Col>
            </Row>

            {/* PokeEvolution - Exibe a cadeia de evolução do pokemon */}
            <PokeEvolution data={details.evolution} types={details.types} />
          </>
        )}
      </Container>

      <Footer />
    </div>
  );
}

export default Details;
