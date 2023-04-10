// libraries 
import {useEffect, useRef, useState } from "react";
import style from "./Viewer.module.scss";
// helper functions
import { initialCoordinatesEasyLevel } from "../../levels/easy-level";
import { isLocationInCountry } from "../../api/fetchImageMetadata";
import { initialCoordinatesMediumLevel } from "../../levels/medium-level";
import { useCoordinates } from "../../hooks/useCoordinates";
import { useCurrentStepData } from "../../hooks/useCurrentStepData";
import { useViewerInitialization } from "../../hooks/useViewerInitialization";
// components
import { MapComponent } from "../MapComponent/MapComponent";
import { ModalConfirm } from "../ModalConfirm/ModalConfirm";
import { ModalAnswerResult } from "../ModalAnswerResult/ModalAnswerResult";


export function Viewer({ currentStepData, containerRef, setCurrentGameStep }) {
  const [isOpenMap, setIsOpenMap] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [clickedPosition, setClickedPosition] = useState(null);
  const [acceptAnswer, setAcceptAnswer] = useState(null);
  const [isAnswerCurrent, setIsAnswerCurrent] = useState(null);

  useEffect(() => {
    if (acceptAnswer && currentStepData) {
      console.log(currentStepData);
      const { lat, lng } = clickedPosition;

      isLocationInCountry(lat, lng, currentStepData.country).then((result) =>
        setIsAnswerCurrent(result)
      );
    }
  }, [acceptAnswer, clickedPosition, currentStepData]);

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
          setCurrentStepEasy={setCurrentGameStep}
          setAcceptAnswer={setAcceptAnswer}
          isAnswerCurrent={isAnswerCurrent}
          setIsAnswerCurrent={setIsAnswerCurrent}
        />
      ) : null}
    </div>
  );
}
