// libraries
import { useCallback } from "react";
//style
import style from "./Viewer.module.scss";
// components
import { ModalConfirm } from "../ModalConfirm/ModalConfirm";
import { ModalAnswerResult } from "../ModalAnswerResult/ModalAnswerResult";
import { useViewerState } from "../../hooks/useViewerState";
import { AnswerForm } from "../AnswerForm/AnswerForm";

export function Viewer({
  currentStepData,
  containerRef,
  setCurrentGameStep,
  currentCitiesQuantity,
}) {
  const [state, setState] = useViewerState(currentStepData);

  const handleInputChange = useCallback((e) => {
    setState((prevState) => ({ ...prevState, inputAnswer: e.target.value }));
  }, []);

  const handleInputSubmit = useCallback((e) => {
    e.preventDefault();
    setState((prevState) => ({ ...prevState, isOpenModal: true }));
  }, []);
  const toggleMap = () => {
    setState((prevState) => ({
      ...prevState,
      isOpenMap: !prevState.isOpenMap,
    }));
  };

  return (
    <div>
      <div
        ref={containerRef}
        id="mapillary-viewer"
        style={{ width: "100%", height: "100vh" }}
      ></div>
      <p className={style.quantity}>
        {currentStepData?.currentStep}/{currentCitiesQuantity}
      </p>
      <button onClick={toggleMap} className={style.openCardBtn}>
        Reply
      </button>

      {state.isOpenMap && (
        <AnswerForm
          handleInputSubmit={handleInputSubmit}
          handleInputChange={handleInputChange}
          toggleMap={toggleMap}
          setIsOpenModal={() =>
            setState((prevState) => ({ ...prevState, isOpenModal: true }))
          }
          clickedPosition={state.clickedPosition}
          setClickedPosition={(position) =>
            setState((prevState) => ({
              ...prevState,
              clickedPosition: position,
            }))
          }
        />
      )}
      {state.isOpenModal && (
        <ModalConfirm
          setIsOpenModal={() =>
            setState((prevState) => ({ ...prevState, isOpenModal: false }))
          }
          setIsOpenMap={toggleMap}
          setAcceptAnswer={(accept) =>
            setState((prevState) => ({ ...prevState, acceptAnswer: accept }))
          }
        />
      )}

      {(state.acceptAnswer && state.isAnswerCurrent !== null) ||
      state.isInputAnswerCorrect !== null ? (
        <ModalAnswerResult
          setCurrentStepEasy={setCurrentGameStep}
          setAcceptAnswer={(accept) =>
            setState((prevState) => ({ ...prevState, acceptAnswer: accept }))
          }
          isAnswerCurrent={state.isAnswerCurrent}
          setIsAnswerCurrent={(answer) =>
            setState((prevState) => ({ ...prevState, isAnswerCurrent: answer }))
          }
          isInputAnswerCorrect={state.isInputAnswerCorrect}
          setIsInputAnswerCorrect={(correct) =>
            setState((prevState) => ({
              ...prevState,
              isInputAnswerCorrect: correct,
            }))
          }
          setClickedPosition={(position) =>
            setState((prevState) => ({
              ...prevState,
              clickedPosition: position,
            }))
          }
        />
      ) : null}
    </div>
  );
}
