import React, { useEffect, useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { useFavoriteContext } from "../../contexts/Favorites";

function Favorites() {
    const { favorite } = useFavoriteContext();

    return (
        <Container>
            <h2>Favoritos</h2>
            {favorite.length > 0 ? (
                <Row>
                    {favorite.map((pokemon) => (
                        <Col key={pokemon.id} xs={12} sm={6} lg={3}>
                            {/* Renderizar o componente PokeCard ou qualquer outro componente para exibir o pokemon */}
                        </Col>
                    ))}
                </Row>
            ) : (
                <p>Nenhum pokemon favorito encontrado.</p>
            )}
        </Container>
    );
}

export default Favorites;
