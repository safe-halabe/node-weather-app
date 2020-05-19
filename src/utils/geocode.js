const request = require("request");

const geocode = (address, callback) => {
  const accessKey =
    "pk.eyJ1Ijoic2FmZWhhbGFiZSIsImEiOiJjazlyOXRycnIwczY4M2RueHJoeGtvd2xtIn0.Jz06jUet8kO0IW2zDFR7GQ";

  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=${accessKey}&limit=1`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to location services!", undefined);
    } else if (body.features.length === 0) {
      callback("Unable to find location. Try another search.", undefined);
    } else {
      callback(undefined, {
        longitude: body.features[0].center[0],
        latitude: body.features[0].center[1],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
