import { ZOOM_LEVEL, API_KEY, API_URL } from "./config";
import { getJson } from "./helper";
// import icons from "../../images/icon-location.svg";
export const state = {
  ipAddressObject: {},
};
// const greenIcon = L.icon({
//   iconUrl: icons,

//   iconSize: [30, 50], // size of the icon
//   shadowSize: [50, 64], // size of the shadow
//   iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
//   shadowAnchor: [4, 62], // the same for the shadow
//   popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
// });

export const loadMap = function (state) {
  const { latitude } = state.ipAddressObject;
  const { longitude } = state.ipAddressObject;
  const coords = [latitude, longitude];
  document.getElementById("ipTrackerApp").innerHTML =
    "<div id='map' style='width: 100%; height: 485px; margin-top: -4px'></div>";

  const map = L.map("map").setView(coords, ZOOM_LEVEL);

  L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
    maxZoom: 20,
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
  }).addTo(map);
  L.marker(coords).addTo(map).openPopup();
};

const createIpObject = function (data) {
  return {
    ipAddress: data.ip,
    region: data.location.region,
    city: data.location.city,
    isp: data.isp,
    timezone: data.location.timezone,
    latitude: data.location.lat,
    longitude: data.location.lng,
  };
};

export const loadIpAddress = async function (query) {
  const data = await getJson(
    `${API_URL}${API_KEY}${query ? `&ipAddress=${query}` : ""}`
  );
  state.ipAddressObject = createIpObject(data);
};
