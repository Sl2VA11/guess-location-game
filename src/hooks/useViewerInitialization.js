import { useEffect } from "react";
import { initializeViewer } from "../helpers/map/initializeViewer";
import { removeFirstMapillaryDom } from "../helpers/map/removeFirstMapillaryDom";

export const useViewerInitialization = (containerRef, currentStepData) => {
  useEffect(() => {
    if (containerRef.current && currentStepData) {
      initializeViewer(currentStepData.imageId, containerRef.current);
    }
    removeFirstMapillaryDom();
  }, [containerRef, currentStepData]);
};
