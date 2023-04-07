// libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";
//pages
import { AnswerNo } from "../../pages/AnswerNo/AnswerNo";
import { Welcome } from "../../pages/Welcome/Welcome";
import { Game } from "../../pages/Game/Game";
import { Home } from "../../pages/Home/Home";



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