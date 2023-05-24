import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Row, Col } from "react-bootstrap";
import Colors from "../../styles/Colors";
import "./styles.css";

// Componente de cartão de carregamento
const LoadingCard = ({ qty }) => {
  // Função para renderizar os skeletons
  function RenderSkeleton() {
    var list = [];
    for (var i = 1; i <= qty; i++) {
      list.push(
        // Coluna responsiva para diferentes tamanhos de tela
        <Col xs={12} sm={6} lg={3} key={i}>
          {/* Item de carregamento */}
          <div className="loading-item mb-3 p-3">
            {/* Configuração do tema e cor do skeleton */}
            <SkeletonTheme color={Colors.brand_dark} highlightColor="#444">
              {/* Skeleton para linha de texto */}
              <Skeleton count={1} />
              <Skeleton count={1} />
              {/* Skeleton para imagem circular */}
              <div className="my-4 d-flex justify-content-center">
                <Skeleton circle={true} height={200} width={200} />
              </div>
              {/* Skeleton para uma barra de altura específica */}
              <Skeleton height={47} />
            </SkeletonTheme>
          </div>
        </Col>
      );
    }
    return list;
  }

  // Renderiza os skeletons dentro de uma linha
  return <Row>{RenderSkeleton()}</Row>;
};

export default LoadingCard;
