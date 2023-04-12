import { useEffect, useState } from "react";
import { assignRandomCurrentSteps } from "../helpers/assignRandomCurrentSteps";

export const useCoordinates = (
  level,
  initialCoordinates,
  currentCitiesQuantity
) => {
  const [coordinates, setCoordinates] = useState([]);

  
  useEffect(() => {
    const newCoordinatesArray = initialCoordinates[level].slice(
      0,
      currentCitiesQuantity
    );
    console.log(currentCitiesQuantity);
    setCoordinates(assignRandomCurrentSteps(newCoordinatesArray));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level, currentCitiesQuantity]);

  
  return coordinates;
};
