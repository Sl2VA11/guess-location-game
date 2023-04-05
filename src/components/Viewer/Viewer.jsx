// Importing libraries and components
import { useEffect, useMemo, useRef, useState } from "react";
import style from "./Viewer.module.scss";

// Importing helper functions
import { initializeViewer } from "../../helpers/map/initializeViewer";
import { removeFirstMapillaryDom } from "../../helpers/map/removeFirstMapillaryDom";
import { handleClickPosition } from "../../helpers/handleClickPosition";
import { isLocationInCountry } from "../../api/fetchImageMetadata";
import { coordinatesEasyLevel } from "../../levels/easy-level";

// Importing components
import { MapComponent } from "../MapComponent/MapComponent";
import { ModalConfirm } from "../ModalConfirm/ModalConfirm";

export function Viewer() {
 const [isOpenMap, setIsOpenMap] = useState(false);
 const [isOpenModal, setIsOpenModal] = useState(false);
 const [clickedPosition, setClickedPosition] = useState(null);
 const [acceptAnswer, setAcceptAnswer] = useState(null);
 const [currentStepEasy, setCurrentStepEasy] = useState("first");
 const [currentStepData, setCurrentStepData] = useState(null);
 const containerRef = useRef(null);

 const currentStepDataMemo = useMemo(() => {
   let data = null;
   coordinatesEasyLevel.forEach(({ currentStep, country, imageId }) => {
     if (currentStep === currentStepEasy) {
       data = { currentStep, country, imageId };
     }
   });
   return data;
 }, [currentStepEasy]);

 useEffect(() => {
   setCurrentStepData(currentStepDataMemo);
 }, [currentStepDataMemo]);

 useEffect(() => {
   if (acceptAnswer && currentStepData) {
     handleClickPosition(
       clickedPosition,
       isLocationInCountry,
       currentStepData.country
     );
   }
 }, [acceptAnswer, clickedPosition, currentStepData]);

 useEffect(() => {
   if (containerRef.current && currentStepData) {
     initializeViewer(currentStepData.imageId, containerRef.current);
   }
 }, [containerRef, currentStepData]);

 useEffect(() => {
   removeFirstMapillaryDom();
 }, []);


  return (
    <div>
      <div
        ref={containerRef}
        id="mapillary-viewer"
        style={{ width: "100%", height: "100vh" }}
      ></div>

      <button
        onClick={() => setIsOpenMap((prev) => !prev)}
        className={style.openCardBtn}
      >
        open map
      </button>
      {isOpenMap && (
        <MapComponent
          setIsOpenMap={setIsOpenMap}
          setIsOpenModal={setIsOpenModal}
          clickedPosition={clickedPosition}
          setClickedPosition={setClickedPosition}
          acceptAnswer={acceptAnswer}
        />
      )}
      {isOpenModal && (
        <ModalConfirm
          setIsOpenModal={setIsOpenModal}
          setIsOpenMap={setIsOpenMap}
          setAcceptAnswer={setAcceptAnswer}
        />
      )}
    </div>
  );
}
