export enum TypesSimulations {
  GET_SIMULATIONS = 'GET_SIMULATIONS',
}

export interface ItensSimulations {
  tipoIndexacao: string;
  tipoRendimento: string;
  valorFinalBruto: number;
  aliquotaIR: number;
  valorPagoIR: number;
  valorTotalInvestido: number;
  valorFinalLiquido: number;
  ganhoLiquido: number;

  graficoValores: Graphics;
}

export interface Graphics {
  comAporte: ItensGraphics;
  semAporte: ItensGraphics;
}

export interface ItensGraphics {
  0: number;
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
  6: number;
  7: number;
  8: number;
  9: number;
}

export interface SimulationsData {
  simulationsData: ItensSimulations[];
}

export interface ReducerSimulationsData {
  simulations: any;
  indicators: SimulationsData;
}
