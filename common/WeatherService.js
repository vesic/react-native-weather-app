const APIKEY = "1576f082be16c982ef27e971c34b3348";

const URL = `http://api.openweathermap.org/data/2.5/weather?APPID=${APIKEY}&units=metric`;

export const getByPosition = coords => {
  return fetch(`${URL}&lat=${coords.lat}&lon=${coords.lon}`).then(res =>
    res.json()
  );
};

export const getByCity = name => {
  return fetch(`${URL}&q=${name}`).then(res => res.json());
};
