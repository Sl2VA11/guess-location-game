import { useMapEvent } from "react-leaflet";

export const ClickMapHandler = ({ onClick }) => {
  useMapEvent("click", onClick);
  return null;
};
