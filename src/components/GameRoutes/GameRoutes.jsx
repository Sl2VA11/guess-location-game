// libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";
//pages
import { AnswerNo } from "../../pages/AnswerNo/AnswerNo";
import { Welcome } from "../../pages/Welcome/Welcome";
import { Game } from "../../pages/Game/Game";
import { Home } from "../../pages/Home/Home";
import { ChooseLevel } from "../../pages/ChooseLevel/ChooseLevel";
import { useState } from "react";



export function GameRoutes() {
  const [currentCitiesQuantity, setCurrentCitiesQuantity] = useState(null)
  

   return (
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Welcome />} />
         <Route path="/wrong-answer" element={<AnswerNo />} />
         <Route path="/home" element={<Home />} />
         <Route
           path="/choose-level"
           element={<ChooseLevel setCurrentCitiesQuantity={setCurrentCitiesQuantity}/>}
         />
         <Route
           path="/game/:level"
           element={<Game currentCitiesQuantity={currentCitiesQuantity} />}
         />
       </Routes>
     </BrowserRouter>
   );
}