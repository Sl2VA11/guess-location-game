// Importing libraries and components
import { useEffect, useMemo, useRef, useState } from "react";
import style from "./Viewer.module.scss";

// Importing helper functions
import { initializeViewer } from "../../helpers/map/initializeViewer";
import { removeFirstMapillaryDom } from "../../helpers/map/removeFirstMapillaryDom";
import { assignRandomCurrentSteps } from "../../helpers/assignRandomCurrentSteps";
import { initialCoordinatesEasyLevel } from "../../levels/easy-level";
import { isLocationInCountry } from "../../api/fetchImageMetadata";

// Importing components
import { MapComponent } from "../MapComponent/MapComponent";
import { ModalConfirm } from "../ModalConfirm/ModalConfirm";
import { ModalAnswerResult } from "../ModalAnswerResult/ModalAnswerResult";


export function Viewer() {
  const [isOpenMap, setIsOpenMap] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [clickedPosition, setClickedPosition] = useState(null);
  const [acceptAnswer, setAcceptAnswer] = useState(null);
  const [currentStepEasy, setCurrentStepEasy] = useState(1);
  const [currentStepData, setCurrentStepData] = useState(null);
  const [isAnswerCurrent, setIsAnswerCurrent] = useState(null);
  const containerRef = useRef(null);
  const [coordinatesEasyLevel, setCoordinatesEasyLevel] = useState(
    initialCoordinatesEasyLevel
  );

  useEffect(() => {
    setCoordinatesEasyLevel(
      assignRandomCurrentSteps(initialCoordinatesEasyLevel)
    );
  }, []);

  const currentStepDataMemo = useMemo(() => {
    let data = null;

    coordinatesEasyLevel.forEach(({ currentStep, country, imageId }) => {
      if (currentStep !== currentStepEasy) {
        return;
      }
      data = { currentStep, country, imageId };
    });
    return data;
  }, [coordinatesEasyLevel, currentStepEasy]);

  useEffect(() => {
    setCurrentStepData(currentStepDataMemo);
  }, [currentStepDataMemo]);

  useEffect(() => {
    if (acceptAnswer && currentStepData) {
      console.log(currentStepData);
      const { lat, lng } = clickedPosition;

      isLocationInCountry(lat, lng, currentStepData.country).then((result) =>
        setIsAnswerCurrent(result)
      );
    }
  }, [acceptAnswer, clickedPosition, currentStepData]);

  useEffect(() => {
    if (containerRef.current && currentStepData) {
      console.log(currentStepData);
      initializeViewer(currentStepData.imageId, containerRef.current);
    }
    removeFirstMapillaryDom();
  }, [containerRef, currentStepData]);

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

      {acceptAnswer && isAnswerCurrent !== null ? (
        <ModalAnswerResult
          setCurrentStepEasy={setCurrentStepEasy}
          setAcceptAnswer={setAcceptAnswer}
          isAnswerCurrent={isAnswerCurrent}
          setIsAnswerCurrent={setIsAnswerCurrent}
        />
      ) : null}
    </div>
  );
}
