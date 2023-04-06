import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Viewer } from "../../components/Viewer/Viewer";

export function Game() {
   const location = useLocation();
  const initialLevel = location.pathname === "/game/easy" ? "easy" : "medium";
  const [level, setLevel] = useState(initialLevel);
   
   
  useEffect(() => {
    setLevel(initialLevel);
  }, [initialLevel, location.pathname]);

   
  return <Viewer level={level} />;
}
