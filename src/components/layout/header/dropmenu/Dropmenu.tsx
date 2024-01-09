import { useState } from "react";
import { NavLink } from "react-router-dom";
import Style from "./Dropmenu.module.scss";

import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import TranslateIcon from "@mui/icons-material/Translate";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Dropmenu: React.FC = () => {
  const [isActiveDis, setIsActiveDis] = useState(false);

  const toggleDescription = () => {
    setIsActiveDis(!isActiveDis);
  };

  return (
    <div className={Style.wrapper_adpt}>
      <div className={Style.wrapper_adpt_hlp}>
        <div className={Style.wrapper}>
          <div className={Style.wrapper_box}>
            <NavLink to="/Catalog" className={Style.link}>
              <LocalTaxiIcon />
              Стать водителем
            </NavLink>
            <NavLink to="/Catalog" className={Style.link}>
              <HelpCenterIcon />
              Как начать
            </NavLink>
            <div
              className={isActiveDis ? Style.Lang_active : Style.Lang}
              onClick={toggleDescription}>
              {isActiveDis ? (
                <div className={Style.Discaption_Active}>
                  <hr />
                  <NavLink to="/" className={Style.Lang_Choose}>
                    <img
                      src="	https://cdn1.ozone.ru/s3/seller-promo-events/static/index/ic_flag_ru.svg"
                      alt=""
                    />
                    Русский <span>Russia</span>
                  </NavLink>
                  <NavLink to="/" className={Style.Lang_Choose}>
                    <img
                      src="https://seekflag.com/app/uploads/2021/12/Flag-of-kyrgyzstan-01.png"
                      alt=""
                    />
                    Кыргызский <span>Kyrgyz</span>
                  </NavLink>
                  <NavLink to="/" className={Style.Lang_Choose}>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png"
                      alt=""
                    />
                    Английский <span>English</span>
                  </NavLink>
                </div>
              ) : (
                <div className={Style.Discaption}>
                  <TranslateIcon /> -
                  <img
                    src="	https://cdn1.ozone.ru/s3/seller-promo-events/static/index/ic_flag_ru.svg"
                    alt=""
                  />
                  Русский <span>Russia</span>
                  <KeyboardArrowDownIcon />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropmenu;
