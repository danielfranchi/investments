import React, { useEffect } from 'react';
import Header from '../../components/Header/Header';
import Simulator from '../../components/Simulator/Simulator';

import { useDispatch } from 'react-redux';
import { getIndicators } from '../../store/ducks/indicators/actions';

import { api } from '../../services/api';
import SimulationResult from '../../components/SimulationResult/SimulationResult';

import styles from './Home.module.scss';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    api
      .get('indicadores')
      .then((response) => dispatch(getIndicators(response.data)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.div}>
      <Header />

      <main className={styles.main}>
        <h1>Simulador de Investimentos</h1>

        <div className={styles.grid}>
          <Simulator />
          <SimulationResult />
        </div>
      </main>
    </div>
  );
};

export default Home;
