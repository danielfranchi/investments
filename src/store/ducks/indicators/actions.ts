import { action } from 'typesafe-actions';
import { IndicatorData, TypesIndicators } from './types';

export const getIndicators = (payload: IndicatorData) =>
  action(TypesIndicators.GET_INDICATORS, payload);
