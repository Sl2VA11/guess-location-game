import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnswerNo } from "../../pages/AnswerNo/AnswerNo";
import { Game } from "../../pages/Game/Game";
import { Home } from "../../pages/Home/Home";
import { Welcome } from "../../pages/Welcome/Welcome";

export function GameRoutes() {
   
   return (
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Welcome />} />
         <Route path="/wrong-answer" element={<AnswerNo />} />
         <Route path="/home" element={<Home />} />
         <Route path="/game/:level" element={<Game />} />
       </Routes>
     </BrowserRouter>
   );
}