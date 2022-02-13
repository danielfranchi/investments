import { IndicatorData, TypesIndicators } from './types';

const initialStateIndicators: IndicatorData = {
  indicatorData: [],
};

function reducerIndicator(state = initialStateIndicators, action: any) {
  switch (action.type) {
    case TypesIndicators.GET_INDICATORS:
      return {
        indicatorData: action.payload,
      };

    default:
      return state;
  }
}

export default reducerIndicator;
