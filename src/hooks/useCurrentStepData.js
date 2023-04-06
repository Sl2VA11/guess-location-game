import { useMemo } from "react";

export const useCurrentStepData = (level, coordinates, currentGameStep) => {
  return useMemo(() => {
    let data = null;
    coordinates.forEach(({ currentStep, country, imageId }) => {
      if (currentStep !== currentGameStep) {
        return;
      }
      data = { currentStep, country, imageId };
    });
    return data;
  }, [coordinates, currentGameStep]);
};
