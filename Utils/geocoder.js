import NodeGeocoder from "node-geocoder";

const options = {
  provider: "mapquest",
  apiKey: "eAoRsUXwl9vuMvK0FesPUfGNKAXM8UVI",

  formatter: null,
};

const geocoder = NodeGeocoder(options);

export default geocoder;
