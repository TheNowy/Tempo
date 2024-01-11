import React from "react";
import Style from "./WayFlex.module.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const WayFlex: React.FC = () => {
  return (
    <>
      <div className={Style.wrapper}>
        <div className={Style.title}>
          <h1>Как начать получать доход</h1>
        </div>
        <div className={Style.leader}>
          <h1>
            <span>1</span> — Оставьте заявку
          </h1>
          <br />
          <div className={Style.position}>
            <ArrowBackIcon />
          </div>
          <h1>
            <span>2</span> — Мы позвоним вам, чтобы уточнить детали
          </h1>
          <br />
          <div className={Style.position}>
            <ArrowBackIcon />
          </div>
          <h1>
            <span>3</span> — Оформитесь в таксопарке
          </h1>
          <br />
          <div className={Style.position}>
            <ArrowBackIcon />
          </div>
          <h1>
            <span>4</span> — Выходите на линию и получайте заказы
          </h1>
        </div>
      </div>
    </>
  );
};

export default WayFlex;
