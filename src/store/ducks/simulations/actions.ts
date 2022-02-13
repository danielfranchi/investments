import { action } from 'typesafe-actions';
import { SimulationsData, TypesSimulations } from './types';

export const getSimulations = (payload: SimulationsData) =>
  action(TypesSimulations.GET_SIMULATIONS, payload);
