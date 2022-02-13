export enum TypesIndicators {
  GET_INDICATORS = 'GET_INDICATORS',
}

export interface ItensIndicators {
  nome: string;
  valor: number;
}

export interface IndicatorData {
  indicatorData: ItensIndicators[];
}

export interface ReducerIndicatorData {
  indicators: IndicatorData;
}
