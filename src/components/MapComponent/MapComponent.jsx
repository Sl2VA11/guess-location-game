// libraries
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import React, { useEffect, useState } from "react";
import L from "leaflet";
//helpers
import { ClickMapHandler } from "../../helpers/map/ClickMapHandler";
//style
import style from "./MapComponent.module.scss";


export const MapComponent = ({
  setIsOpenMap,
  setIsOpenModal,
  clickedPosition,
  setClickedPosition,
}) => {
  
  const [fullMapScreen, setFullMapScreen] = useState(false);
  const [fullBtnHover, setFullBtnHover] = useState(false);

  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
      iconUrl: require("leaflet/dist/images/marker-icon.png"),
      shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
    });
  }, []);

  const initialPosition = [30, 20];
  const initialZoom = fullMapScreen ? 3 : 2;

  return (
    <>
      <MapContainer
        center={clickedPosition ? clickedPosition : initialPosition}
        zoom={initialZoom}
        className={`${style.mapContainer} ${
          fullMapScreen ? style.mapContainerFull : style.mapContainerSmall
        }`}
        key={fullMapScreen ? "full" : "small"}
      >
        <button
          style={{
            height: "30px",
            width: "60px",
            position: "absolute",
            right: "15%",
            top: "0px",
            zIndex: 1111,
          }}
          onMouseEnter={() => setFullBtnHover(true)}
          onMouseLeave={() => setFullBtnHover(false)}
          onClick={() => {
            setIsOpenMap(false);
          }}
        >
          Close
        </button>
        <button
          style={{
            height: "30px",
            width: "60px",
            position: "absolute",
            right: "0px",
            top: "0px",
            zIndex: 1111,
          }}
          onMouseEnter={() => setFullBtnHover(true)}
          onMouseLeave={() => setFullBtnHover(false)}
          onClick={() => {
            setFullMapScreen(!fullMapScreen);
            setFullBtnHover(false);
          }}
        >
          {fullMapScreen ? "small" : "full"}
        </button>

        {!fullBtnHover && (
          <ClickMapHandler
            onClick={(event) => {
              setClickedPosition(event.latlng);

              setIsOpenModal(true);
            }}
          />
        )}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {clickedPosition && (
          <Marker position={clickedPosition}>
            <Popup>
              <h4>
                Clicked coordinates: {clickedPosition.lat.toFixed(6)},{" "}
                {clickedPosition.lng.toFixed(6)}
              </h4>
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </>
  );
};
