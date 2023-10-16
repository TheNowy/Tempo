import Style from "./Sandbox.module.scss";
import { useState, useEffect } from "react";

import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AppsOutageIcon from "@mui/icons-material/AppsOutage";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";

//Str
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarBorderIcon from "@mui/icons-material/StarBorder";

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
              <AppsOutageIcon />
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
            <div className={Style.players}>
              <h1>
                <StarIcon />
                <span className={Style.LeaderLVL3}>Highest Leader</span> - CVA |
                AndreyBolgov
              </h1>
            </div>
            <div className={Style.players}>
              <h1>
                <StarHalfIcon />
                <span className={Style.LeaderLVL2}>Middle Leader</span> - CVA |
                xDeadForMilfa
              </h1>
            </div>
            <div className={Style.players}>
              <h1>
                <StarBorderIcon />
                <span className={Style.LeaderLVL1}>Lowest Leader</span> - CVA |
                KaYd0
              </h1>
            </div>
          </div>
          <div
            className={`${Style.Content} ${
              toggleState === 3 ? Style.Active_Content : ""
            }`}>
            <div className={Style.players}>
              <h1>
                <span>Helper</span> - CVA | Hacer_v_rekah
              </h1>
            </div>
          </div>
          <div
            className={`${Style.Content} ${
              toggleState === 4 ? Style.Active_Content : ""
            }`}>
            <div className={Style.players}>
              <h1>
                <span>Bunny</span> - Zeaper123
              </h1>
              <div className={Style.Accept}>
                <button>Принять</button>
                <button>Отказ</button>
                <p>
                  <HourglassBottomIcon />В Ожидании
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sandbox;
