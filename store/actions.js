import * as types from "./types";
import * as LocationService from "../common/LocationService";
import * as WeatherService from "../common/WeatherService";

const notFoundFallback = {
  coord: {
    lon: -122.03,
    lat: 37.33
  },
  weather: [
    {
      id: 803,
      main: "Clouds",
      description: "broken clouds",
      icon: "04n"
    }
  ],
  base: "stations",
  main: {
    temp: 284.61,
    pressure: 1019,
    humidity: 89,
    temp_min: 284.15,
    temp_max: 284.85
  },
  visibility: 12874,
  wind: {
    speed: 0.94,
    deg: 176.503
  },
  clouds: {
    all: 75
  },
  dt: 1545375360,
  sys: {
    type: 1,
    id: 5122,
    message: 0.0308,
    country: "US",
    sunrise: 1545405528,
    sunset: 1545440052
  },
  id: 5341145,
  name: "Cupertino",
  cod: 200
};

export const toggleSearch = isVisible => {
  return {
    type: types.TOGGLE_SEARCH_MODAL,
    isVisible
  };
};

export const getPosition = () => {
  return dispatch => {
    LocationService.getPosition()
      .then(res => WeatherService.getByPosition(res))
      .then(res => {
        dispatch({
          type: types.GET_WEATHER_BY_POSITION,
          weather: res
        });
        dispatch({
          type: types.SHOW_LOADING_INDICATOR,
          isVisible: false
        });
      });
  };
};

export const getByCity = name => {
  return dispatch => {
    dispatch({
      type: types.SHOW_LOADING_INDICATOR,
      isVisible: true
    });
    setTimeout(() => {
      // make more interesting 250ms delay
      WeatherService.getByCity(name).then(res => {
        if (res.cod === "400" || res.cod === "404") {
          dispatch({
            type: types.NOT_FOUND,
            weather: notFoundFallback
          });
          dispatch({
            type: types.SHOW_LOADING_INDICATOR,
            isVisible: false
          });
          return alert(res.message); // not sure about this one
        }
        dispatch({
          type: types.GET_WEATHER_BY_NAME,
          weather: res
        });
        dispatch({
          type: types.SHOW_LOADING_INDICATOR,
          isVisible: false
        });
      });
    }, 250);
  };
};

export const showIndicator = isVisible => {
  return {
    type: types.SHOW_LOADING_INDICATOR,
    isVisible
  };
};
