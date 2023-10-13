import Style from "./Sandbox.module.scss";
import { useState } from "react";

import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

const Sandbox = () => {
  const [toggleState, setToggleState] = useState(1);

  const ToggleTab = (index: number) => {
    setToggleState(index);
  };

  return (
    <>
      <div className={Style.Page_Wrapper}>
        <div className={Style.Drop_Box}>
          <div
            className={
              toggleState === 1 ? Style.Drop_Uvs_Box : Style.Drop_Vs_Box
            }
            onClick={() => ToggleTab(1)}>
            <FormatListBulletedIcon />
            Игроки
          </div>
          <div
            className={
              toggleState === 2 ? Style.Drop_Uvs_Box : Style.Drop_Vs_Box
            }
            onClick={() => ToggleTab(2)}>
            <SupervisorAccountIcon /> Главы
          </div>
          <div
            className={
              toggleState === 3 ? Style.Drop_Uvs_Box : Style.Drop_Vs_Box
            }
            onClick={() => ToggleTab(3)}>
            <AdminPanelSettingsIcon />
            Администрация
          </div>
          <div
            className={
              toggleState === 4 ? Style.Drop_Uvs_Box : Style.Drop_Vs_Box
            }
            onClick={() => ToggleTab(4)}>
            <AdminPanelSettingsIcon />
            Заявки в Клан
          </div>
        </div>
        <div
          className={`${Style.Content} ${
            toggleState === 1 ? Style.Active_Content : ""
          }`}>
          <div className={Style.players}>
            <h1>
              <span>Bunny</span> - CVA | xDeadForMilfa
            </h1>
          </div>
          <div className={Style.players}>
            <h1>
              <span>Dragon</span> - CVA | tufleva
            </h1>
          </div>
          <div className={Style.players}>
            <h1>
              <span>Gay</span> - CVA | chelovek5614
            </h1>
          </div>
        </div>
        <div
          className={`${Style.Content} ${
            toggleState === 2 ? Style.Active_Content : ""
          }`}>
          <h1>Content 2</h1>
        </div>
        <div
          className={`${Style.Content} ${
            toggleState === 3 ? Style.Active_Content : ""
          }`}>
          <h1>Content 3</h1>
        </div>
        <div
          className={`${Style.Content} ${
            toggleState === 4 ? Style.Active_Content : ""
          }`}>
          <h1>Content 4</h1>
        </div>
      </div>
    </>
  );
};

export default Sandbox;
