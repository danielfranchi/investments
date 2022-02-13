import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { ReducerIndicatorData } from '../../store/ducks/indicators/types';
import { getSimulations } from '../../store/ducks/simulations/actions';

import Button from './Button/Button';
import Text from './Text/Text';
import { coinMask } from '../../assets/Coin/Coin';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import toast, { Toaster } from 'react-hot-toast';
import { api } from '../../services/api';

import styles from './Simulator.module.scss';

interface IFormInputs {
  mensal: number;
  rentabilidade: number;
  inicial: number;
  prazo: number;
}

const Simulator = () => {
  const dispatch = useDispatch();

  const [performance, setPerformance] = useState('');
  const [indexing, setIndexing] = useState('');

  const cdi = useSelector(
    (state: ReducerIndicatorData) => state.indicators.indicatorData[0]?.valor,
  );
  const ipca = useSelector(
    (state: ReducerIndicatorData) => state.indicators.indicatorData[1]?.valor,
  );

  const schema = yup.object({
    inicial: yup.string().required(),
    prazo: yup.number().positive().integer().required(),
    mensal: yup.string().required(),
    rentabilidade: yup.number().positive().integer().required(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const simulate = (data: any) => {
    if (data) {
      if (performance && indexing) {
        api
          .get(
            `simulacoes?tipoIndexacao=${indexing}&tipoRendimento=${performance}`,
          )
          .then((response) => dispatch(getSimulations(response.data)));
      } else {
        toast.error('Selecione Rendimento e Indexação');
      }
    }
  };

  return (
    <div className={styles.grid}>
      <Toaster />

      <h2 className={styles.title}>Simulador</h2>

      <div className={styles.text}>
        <div className={styles.textLeft}>
          <Text text="Rendimento" />
        </div>

        <div className={styles.textRight}>
          <Text text="Tipos de indexação" />
        </div>
      </div>

      <form onSubmit={handleSubmit(simulate)} autoComplete="off">
        <div className={styles.button}>
          <div>
            <Button
              text="Bruto"
              onChange={({ target }: any) => setPerformance(target.value)}
              checked={performance === 'bruto'}
            />

            <Button
              text="Liquido"
              onChange={({ target }: any) => setPerformance(target.value)}
              checked={performance === 'liquido'}
            />
          </div>

          <div className={styles.buttonRight}>
            <Button
              text="PRE"
              onChange={({ target }: any) => setIndexing(target.value)}
              checked={indexing === 'pre'}
            />

            <Button
              text="POS"
              onChange={({ target }: any) => setIndexing(target.value)}
              checked={indexing === 'pos'}
            />

            <Button
              text="FIXADO"
              onChange={({ target }: any) => setIndexing(target.value)}
              checked={indexing === 'ipca'}
            />
          </div>
        </div>

        <div className={styles.inputLeft}>
          <label className={errors.inicial ? styles.labelError : styles.label}>
            Aporte Inicial
          </label>
          <input
            type="text"
            {...register('inicial', { required: true })}
            onInput={(e) => coinMask(e)}
            className={styles.input}
          />
          {errors.inicial && (
            <p className={styles.errorInput}>Aporte deve ser um número</p>
          )}

          <label className={errors.prazo ? styles.labelError : styles.label}>
            Prazo
          </label>
          <input
            {...register('prazo', { required: true })}
            className={styles.input}
          />
          {errors.prazo && (
            <p className={styles.errorInput}>Prazo deve ser um número</p>
          )}

          <label className={styles.label}>IPCA (ao ano)</label>
          <input
            type="text"
            name="value"
            value={ipca ? ipca : ''}
            readOnly
            className={styles.input}
          />
        </div>

        <div className={styles.inputRight}>
          <label className={errors.mensal ? styles.labelError : styles.label}>
            Aporte Mensal
          </label>
          <input
            type="text"
            {...register('mensal', { required: true })}
            onInput={(e) => coinMask(e)}
            className={styles.input}
          />
          {errors.mensal && (
            <p className={styles.errorInput}>Aporte deve ser um número</p>
          )}

          <label
            className={errors.rentabilidade ? styles.labelError : styles.label}
          >
            Rentabilidade
          </label>
          <input
            {...register('rentabilidade', { required: true })}
            className={styles.input}
          />
          {errors.rentabilidade && (
            <p className={styles.errorInput}>Rentabilidade em %</p>
          )}

          <label className={styles.label}>CDI (ao ano)</label>
          <input
            type="text"
            name="value"
            value={cdi ? cdi : ''}
            readOnly
            className={styles.input}
          />
        </div>

        <input
          type="button"
          onClick={() => reset()}
          value="Limpar campos"
          className={styles.sendButton}
        />

        <input className={styles.sendButton} type="submit" />
      </form>
    </div>
  );
};

export default Simulator;
