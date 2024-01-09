import React from "react";
import { NavLink } from "react-router-dom";
import Style from "./Dropmenu.module.scss";

const Dropmenu: React.FC = () => {
  return (
    <div className={Style.wrapper_adpt}>
      <div className={Style.wrapper_adpt_hlp}>
        <div className={Style.wrapper}>
          <div className={Style.wrapper_box}>
            <NavLink to="/Catalog" className={Style.link}>
              Стать водителем
            </NavLink>
            <NavLink to="/Catalog" className={Style.link}>
              Как начать
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropmenu;
