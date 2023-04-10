// components
import { Viewer } from "../../components/Viewer/Viewer";
// libraries
import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { initialCoordinatesEasyLevel } from "../../levels/easy-level";
import { initialCoordinatesMediumLevel } from "../../levels/medium-level";
import { useCoordinates } from "../../hooks/useCoordinates";
import { useCurrentStepData } from "../../hooks/useCurrentStepData";
import { useViewerInitialization } from "../../hooks/useViewerInitialization";
export function Game({ currentCitiesQuantity }) { 
  const location = useLocation();
  const initialLevel = location.pathname === "/game/easy" ? "easy" : "medium";
  const [level, setLevel] = useState(initialLevel);
  const [currentGameStep, setCurrentGameStep] = useState(1); 
  const [currentStepData, setCurrentStepData] = useState(null); 
  const containerRef = useRef(null);
  const initialCoordinates = {
    easy: initialCoordinatesEasyLevel,
    medium: initialCoordinatesMediumLevel,
  };


  const coordinates = useCoordinates(level, initialCoordinates,currentCitiesQuantity);
  const currentStepDataMemo = useCurrentStepData(
    level,
    coordinates,
    currentGameStep
  );
  useViewerInitialization(containerRef, currentStepDataMemo);

  useEffect(() => {
    setLevel(initialLevel);
  }, [initialLevel, location.pathname]);

  useEffect(() => {
    setCurrentStepData(currentStepDataMemo);
  }, [currentStepDataMemo]);

  return (
    <Viewer
      level={level}
      currentStepData={currentStepData}
      containerRef={containerRef}
      setCurrentGameStep={setCurrentGameStep}
    />
  );
}
