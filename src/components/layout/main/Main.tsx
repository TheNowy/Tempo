import Home from "../../pages/home/Home";
import Catalog from '../../pages/Catalog/Catalog'
import { Routes, Route } from "react-router-dom";

export const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Catalog" element={<Catalog />} />
      </Routes>
    </div>
  );
};
