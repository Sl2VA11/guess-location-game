// components
import { Viewer } from "../../components/Viewer/Viewer";
// libraries
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export function Game() {
   const location = useLocation();
  const initialLevel = location.pathname === "/game/easy" ? "easy" : "medium";
  const [level, setLevel] = useState(initialLevel);
   
   
  useEffect(() => {
    setLevel(initialLevel);
  }, [initialLevel, location.pathname]);

   
  return <Viewer level={level} />;
}
