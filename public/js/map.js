maptilersdk.config.apiKey = "zFlYSOGjhFEuRE1kJITD";
const map = new maptilersdk.Map({
  container: "map",
  style: "openstreetmap",
  center: [76.96255, 11.01822],
  zoom: 14,
});

async function getStores() {
  const res = await fetch("/api/v1/stores");
  const data = await res.json();
  console.log(data);
  const stores = data.data.map((store) => {
    return {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [
          store.location.coordinates[0],
          store.location.coordinates[1],
        ],
      },
      properties: {
        storeId: store.storeId,
        icon: "shop-15",
      },
    };
  });

  loadMap(stores);
}
const shopIconImage = "https://img.icons8.com/plumpy/24/shop.png";
function loadMap(stores) {
  map.loadImage(shopIconImage, function (error, image) {
    if (error) throw error;
    map.addImage("shop-15", image);
  });

  map.on("load", function () {
    map.addLayer({
      id: "points",
      type: "symbol",
      source: {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: stores,
        },
      },
      layout: {
        "icon-image": "shop-15",
        "icon-size": 1.5,
        "text-field": "{storeId}",
        "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
        "text-offset": [0, 0.9],
        "text-anchor": "top",
      },
    });
  });
}

getStores();
