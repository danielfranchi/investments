import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import {
  ReducerSimulationsData,
  ItensSimulations,
} from '../../../src/store/ducks/simulations/types';

import Graphic from '../Graphic/Graphic';

import styles from './SimulationResult.module.scss';

const SimulationResult = () => {
  const [showTitle, setShowTitle] = useState(false);

  const result = useSelector(
    (state: ReducerSimulationsData) => state.simulations.simulationsData,
  );

  const contributionChart =
    result[0]?.graficoValores &&
    Object.values(result[0]?.graficoValores?.comAporte).map((itens: any) => {
      return parseFloat(itens.toFixed(2));
    });

  const graphWithoutInput =
    result[0]?.graficoValores &&
    Object.values(result[0]?.graficoValores?.semAporte).map((itens: any) => {
      return parseFloat(itens.toFixed(2));
    });

  useEffect(() => {
    if (result.length > 0) {
      setShowTitle(true);
    }
  }, [result]);

  const title = [
    'Valor Final Bruto',
    'Aliquota IR',
    'Valor Pago IR',
    'Valor Final Liquido',
    'Valor Total Investido',
    'Ganho Liquido',
  ];

  return (
    <div className={styles.grid}>
      {showTitle !== false && (
        <h2 className={styles.title}>Resultado da Simulação</h2>
      )}

      {result !== undefined &&
        result.map((itens: ItensSimulations, index: any) => (
          <div key={index} className={styles.cardContainer}>
            <div className={styles.card}>
              <span className={styles.span}>
                <strong>{title[0]}</strong>
              </span>
              <span>
                {itens?.valorFinalBruto.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </span>
            </div>

            <div className={styles.card}>
              <span className={styles.span}>
                <strong>{title[1]}</strong>
              </span>
              <span>{itens?.aliquotaIR}</span>
            </div>

            <div className={styles.card}>
              <span className={styles.span}>
                <strong>{title[2]}</strong>
              </span>
              <span>
                {itens?.valorPagoIR.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </span>
            </div>

            <div className={styles.card}>
              <span className={styles.span}>
                <strong>{title[3]}</strong>
              </span>
              <span className={styles.color}>
                {itens?.valorFinalLiquido.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </span>
            </div>

            <div className={styles.card}>
              <span>
                <strong>{title[4]}</strong>
              </span>
              <span>
                {itens?.valorTotalInvestido.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </span>
            </div>

            <div className={styles.card}>
              <span className={styles.span}>
                <strong>{title[5]}</strong>
              </span>
              <span className={styles.color}>
                {itens?.ganhoLiquido.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </span>
            </div>
          </div>
        ))}

      {(contributionChart || graphWithoutInput) && (
        <div className={styles.graphic}>
          <Graphic
            contributionChart={contributionChart}
            graphWithoutInput={graphWithoutInput}
          />
        </div>
      )}
    </div>
  );
};

export default SimulationResult;
