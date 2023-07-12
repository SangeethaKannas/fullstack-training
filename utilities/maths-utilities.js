t.addAlpha = function (e, t) {
  return (
    e +
    Math.round(255 * Math.min(Math.max(t || 1, 0), 1))
      .toString(16)
      .toUpperCase()
  );
};


export const randomGenerator = (length) => {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  for (let i = length; i > 0; --i)
    result += chars[Math.floor(Math.random() * chars.length)];
  return result;
};

const radians = (degree) => {
  // degrees to radians
  const rad = (degree * Math.PI) / 180;

  return rad;
};

const getDistanceInKm = (lat1, lon1, lat2, lon2) => {
  let dlat;
  let dlon;
  let a;
  let c;
  let R;

  R = 6371; // km
  dlat = radians(lat2 - lat1);
  dlon = radians(lon2 - lon1);
  lat1 = radians(lat1);
  lat2 = radians(lat2);
  a =
    Math.sin(dlat / 2) * Math.sin(dlat / 2) +
    Math.sin(dlon / 2) * Math.sin(dlon / 2) * Math.cos(lat1) * Math.cos(lat2);
  c = 2 * Math.asin(Math.sqrt(a));
  const d = R * c;
  return d;
};

const getDistance = (lat1, lon1, lat2, lon2, unit) => {
  const radlat1 = (Math.PI * lat1) / 180;
  const radlat2 = (Math.PI * lat2) / 180;
  const theta = lon1 - lon2;
  const radtheta = (Math.PI * theta) / 180;
  let dist =
    Math.sin(radlat1) * Math.sin(radlat2) +
    Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  if (dist > 1) {
    dist = 1;
  }
  dist = Math.acos(dist);
  dist = (dist * 180) / Math.PI;
  dist = dist * 60 * 1.1515;
  if (unit === "K") {
    dist *= 1.609344;
  }
  if (unit === "N") {
    dist *= 0.8684;
  }
  return dist;
};


const hideCard = (str) => {

  str.replace(/\b(?:\d{4}[ -]?){3}(?=\d{4}\b))/gm, '### ### ###')
}

hideCard('visa 1234 1234 1234 1234');
