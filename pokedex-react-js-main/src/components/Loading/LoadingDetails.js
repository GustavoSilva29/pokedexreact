import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Row, Col } from "react-bootstrap";
import Colors from "../../styles/Colors";
import "./styles.css";

// Componente de detalhes de carregamento
const LoadingDetails = () => {
  return (
    // Linha que contém os detalhes de carregamento
    <Row>
      <Col xs={12} md={6}>
        {/* Item de carregamento */}
        <div className="loading-item  mb-3 p-3">
          {/* Configuração do tema e cor do skeleton */}
          <SkeletonTheme color={Colors.brand_dark} highlightColor="#444">
            {/* Skeleton com altura específica */}
            <Skeleton height={340} />
          </SkeletonTheme>
        </div>
      </Col>

      <Col xs={12} md={6}>
        {/* Item de carregamento com altura específica */}
        <div style={{ height: 120 }} className="loading-item  mb-3 p-3">
          <SkeletonTheme color={Colors.brand_dark} highlightColor="#444">
            {/* Skeleton com altura específica */}
            <Skeleton height={82} />
          </SkeletonTheme>
        </div>

        {/* Item de carregamento com altura específica */}
        <div style={{ height: 214 }} className="loading-item mb-3 p-3">
          <SkeletonTheme color={Colors.brand_dark} highlightColor="#444">
            {/* Skeleton com altura específica */}
            <Skeleton height={175} />
          </SkeletonTheme>
        </div>
      </Col>

      <Col xs={12}>
        {/* Item de carregamento com altura específica */}
        <div style={{ height: 290 }} className="loading-item mb-3 p-3">
          <SkeletonTheme color={Colors.brand_dark} highlightColor="#444">
            {/* Skeleton com altura específica */}
            <Skeleton height={250} />
          </SkeletonTheme>
        </div>
      </Col>

      <Col xs={12}>
        {/* Item de carregamento com altura específica */}
        <div style={{ height: 290 }} className="loading-item mb-3 p-3">
          <SkeletonTheme color={Colors.brand_dark} highlightColor="#444">
            {/* Skeleton com altura específica */}
            <Skeleton height={250} />
          </SkeletonTheme>
        </div>
      </Col>
    </Row>
  );
};

export default LoadingDetails;
