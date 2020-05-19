const request = require("request");

const forecast = (longitude, latitude, callback) => {
  const accessKey = "1f2831048b919f83e474d2d161df01ef";
  const url = `http://api.weatherstack.com/current?access_key=${accessKey}&query=${longitude},${latitude}&units=m`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        "It is " +
          body.current.weather_descriptions[0] +
          ". the temprtior is " +
          body.current.temperature +
          " degress. " +
          " it feelslike " +
          body.current.feelslike +
          " degress."
      );
    }
  });
};

module.exports = forecast;
