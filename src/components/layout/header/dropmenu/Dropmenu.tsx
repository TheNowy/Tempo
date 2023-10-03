import React from "react";
import { NavLink } from "react-router-dom";
import scss from "./Dropmenu.module.scss";

const Dropmenu: React.FC = () => {
  const activeLink = ({ isActive }: { isActive: boolean }) => {
    return {
      background: isActive ? "#ffffffa0" : "rgb(49, 49, 49)",
      color: isActive ? "black" : "white",
    };
  };

  return (
    <div className={scss.wrapper_adpt}>
      <div className={scss.wrapper_adpt_hlp}>
        <div className={scss.wrapper}>
          <div className={scss.wrapper_box}>
            <NavLink to="/" className={scss.link} style={activeLink}>
              Главная
            </NavLink>
            <hr />
            <NavLink to="/Catalog" className={scss.link} style={activeLink}>
              Каталог
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropmenu;
