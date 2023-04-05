import { Viewer } from "mapillary-js";
import { accessToken } from "./accessToken";


export const initializeViewer = (imageId, container) => {
  const viewer = new Viewer({
    accessToken: accessToken,
    imageId: imageId,
    container: container,
    component: {
      cover: false,
      marker: false,
    },
  });
  
  return viewer;
};
