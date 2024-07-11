import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./Pages/Inicio";

function Approuter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Approuter;
