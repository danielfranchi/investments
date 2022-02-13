import { SimulationsData, TypesSimulations } from './types';

const initialStateSimulations: SimulationsData = {
  simulationsData: [],
};

function reducerSimulations(state = initialStateSimulations, action: any) {
  switch (action.type) {
    case TypesSimulations.GET_SIMULATIONS:
      return {
        simulationsData: action.payload,
      };

    default:
      return state;
  }
}

export default reducerSimulations;
