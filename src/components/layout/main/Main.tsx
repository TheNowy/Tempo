import Home from "../../pages/home/Home";
import Commands from "../../pages/Commands/Commands";
import { Routes, Route } from "react-router-dom";

export const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Commands" element={<Commands />} />
        <Route path="/commands" element={<Commands />} />
      </Routes>
    </div>
  );
};
