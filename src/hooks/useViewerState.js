import { useEffect, useState } from "react";
import { isLocationInCountry } from "../api/fetchImageMetadata";

export const useViewerState = (currentStepData) => {
  const [state, setState] = useState({
    isOpenMap: false,
    isOpenModal: false,
    clickedPosition: null,
    acceptAnswer: null,
    isAnswerCurrent: null,
    inputAnswer: null,
    isInputAnswerCorrect: null,
  });

  useEffect(() => {
    const { acceptAnswer, clickedPosition, inputAnswer } = state;
    
    if (acceptAnswer && !clickedPosition) {
      // input answer
      const isCorrect =
        inputAnswer.toLowerCase() === currentStepData.country.toLowerCase();
      setState((prevState) => ({
        ...prevState,
        isInputAnswerCorrect: isCorrect,
      }));
    }


    if (acceptAnswer && currentStepData && clickedPosition) {
      // map answer
      const { lat, lng } = clickedPosition;
      isLocationInCountry(lat, lng, currentStepData.country).then((result) =>
        setState((prevState) => ({ ...prevState, isAnswerCurrent: result }))
      );
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    state.acceptAnswer,
    state.clickedPosition,
    currentStepData,
    state.inputAnswer,
  ]);

  return [state, setState];
};
