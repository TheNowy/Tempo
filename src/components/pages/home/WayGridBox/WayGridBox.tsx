import React from "react";
import Style from "./WayGridBox.module.scss";

const WayGridBox: React.FC = () => {
  return (
    <>
      <div className={Style.wrapper}>
        <h1>Как начать получать доход</h1>
        <div className={Style.grid_wrapper}>
          <div className={Style.grid_box}>
            <div className={Style.main_tit}>
              <p>Шаг 1</p>
            </div>
            <div className={Style.second_tit}>
              <img src="../../../../Application.png" alt="Loading..." />
            </div>
            <div className={Style.last_tit}>
              <h3>Оставить заявку</h3>
            </div>
          </div>
          <hr />
          <div className={Style.grid_box}>
            <div className={Style.main_tit}>
              <p>Шаг 2</p>
            </div>
            <div className={Style.second_tit}>
              <img src="../../../../PhoneU.png" alt="Loading..." />
            </div>
            <div className={Style.last_tit}>
              <h3>Мы свяжемся с вами с целью уточнения конкретных аспектов</h3>
            </div>
          </div>
          <hr />
          <div className={Style.grid_box}>
            <div className={Style.main_tit}>
              <p>Шаг 3</p>
            </div>
            <div className={Style.second_tit}>
              <img
                className={Style.JPN_Form}
                src="../../../../TaxiCompany.jpg"
                alt="Loading..."
              />
            </div>
            <div className={Style.last_tit}>
              <h3>Оформитесь в парке</h3>
            </div>
          </div>
          <hr />
          <div className={Style.grid_box}>
            <div className={Style.main_tit}>
              <p>Шаг 4</p>
            </div>
            <div className={Style.second_tit}>
              <img src="../../../../Order.png" alt="Loading..." />
            </div>
            <div className={Style.last_tit}>
              <h3>Оформитесь в таксопарке</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WayGridBox;
