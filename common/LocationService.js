export const getPosition = () => {
  return new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(pos => {
      res({
        lat: pos.coords.latitude.toFixed(2),
        lon: pos.coords.longitude.toFixed(2)
      });
    });
  });
};
