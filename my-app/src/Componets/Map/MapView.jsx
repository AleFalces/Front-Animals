import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./MapView.css";
import logo from "../../assets/imagenes/logo_negro.png";

const myIcon = new L.icon({
  iconUrl: logo,
  iconSize: [32, 45],
  className: "leaftlet-div-icon",
});

const MapView = ({ veterinaries }) => {
  return (
    <MapContainer
      center={[-34.70361367132336, -58.50179249999761]}
      zoom={10}
      scrollWheelZoom={true}
      className="mapContainer"
      zoomControl={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {veterinaries.length > 0
        ? veterinaries?.map((ele, ind) => {
            return (
              <Marker key={ind} position={ele.location} icon={myIcon}>
                <Popup className="prueba">
                  <p className="title">
                    {ele.name.charAt(0).toUpperCase() + ele.name.substring(1)}
                  </p>
                  <p className="description">{ele.description}</p>
                  <br />
                </Popup>
              </Marker>
            );
          })
        : null}
    </MapContainer>
  );
};

export default MapView;
