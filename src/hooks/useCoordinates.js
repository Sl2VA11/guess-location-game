import { useEffect, useState } from "react";
import { assignRandomCurrentSteps } from "../helpers/assignRandomCurrentSteps";

export const useCoordinates = (level, initialCoordinates) => {
  const [coordinates, setCoordinates] = useState([]);

  useEffect(() => {
     setCoordinates(assignRandomCurrentSteps(initialCoordinates[level]));
     
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return coordinates;
};
