import * as types from "./types";

const init = {
  isVisible: false,
  weather: {},
  showIndicator: true
};

const reducer = (state = init, action) => {
  switch (action.type) {
    case types.TOGGLE_SEARCH_MODAL:
      return { ...state, isVisible: action.isVisible };
    case types.GET_WEATHER_BY_POSITION:
      return {
        ...state,
        weather: action.weather
      };
    case types.GET_WEATHER_BY_NAME:
      return { ...state, weather: action.weather };
    case types.SHOW_LOADING_INDICATOR:
      return { ...state, showIndicator: action.isVisible };
    case types.NOT_FOUND:
      return { ...state, weather: action.weather };
    default:
      return state;
  }
};

export default reducer;
