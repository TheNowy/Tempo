import Style from "./Sandbox.module.scss";
import { useState, useEffect } from "react";

import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

const Sandbox = () => {
  const [toggleState, setToggleState] = useState(1);
  const [headerScroll, setHeaderScroll] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      if (typeof window !== "undefined" && window.scrollY >= 10) {
        setHeaderScroll(true);
      } else {
        setHeaderScroll(false);
      }
    };

    changeBackground();
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const ToggleTab = (index: number) => {
    setToggleState(index);
  };

  return (
    <>
      <div className={Style.Page_Wrapper}>
        <div className={Style.container}>
          <div
            className={`${Style.Drop_Box} ${
              headerScroll ? Style.active3 : ""
            }`}>
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
                <span>Bunny</span> - CVA | KaYd0
              </h1>
            </div>
            <div className={Style.players}>
              <h1>
                <span>Bunny</span> - CVA | SlivRW
              </h1>
            </div>
            <div className={Style.players}>
              <h1>
                <span>Dragon</span> - CVA | K1rieshich
              </h1>
            </div>
            <div className={Style.players}>
              <h1>
                <span>Dragon</span> - CVA | M4RS1
              </h1>
            </div>
            <div className={Style.players}>
              <h1>
                <span>Imperator</span> - CVA | Nowy
              </h1>
            </div>
            <div className={Style.players}>
              <h1>
                <span className={Style.Cusrom}>Gay</span> - CVA | chelovek5614
              </h1>
            </div>
            <div className={Style.players}>
              <h1>
                <span className={Style.Cusrom}>Frik</span> - CVA | Lacksy
              </h1>
            </div>
            <div className={Style.players}>
              <h1>
                <span className={Style.Cusrom}>Pidor</span> - CVA | HeBazar4iks
              </h1>
            </div>
            <div className={Style.players}>
              <h1>
                <span className={Style.Cusrom_2}>Svintus</span> - CVA | .Батя
                твоя
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
      </div>
    </>
  );
};

export default Sandbox;
