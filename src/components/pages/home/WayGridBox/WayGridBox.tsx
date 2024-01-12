import React from "react";
import Style from "./WayGridBox.module.scss";

const WayGridBox: React.FC = () => {
  return (
    <>
      <div className={Style.wrapper}>
        <div className={Style.grid_wrapper}>
          <div className={Style.main_title}>
            <h1>Как начать получать доход?</h1>
          </div>
          <div className={Style.leader_wrapper}>
            <div className={Style.leader}>
              <div className={Style.grid_box}>
                <hr />
                <h3 className={Style.way}>
                  1
                  <hr />
                </h3>
                <h3 className={Style.discription}>Оставьте заявку</h3>
              </div>
              <div className={Style.grid_box}>
                <hr />
                <h3 className={Style.way}>
                  2
                  <hr />
                </h3>
                <h3 className={Style.discription}>
                  Мы позвоним вам, чтобы уточнить детали
                </h3>
              </div>
              <div className={Style.grid_box}>
                <hr />
                <h3 className={Style.way}>
                  3
                  <hr />
                </h3>
                <h3 className={Style.discription}>Оформитесь в таксопарке</h3>
              </div>
              <div className={Style.grid_box}>
                <h3 className={Style.way}>4</h3>
                <h3 className={Style.discription}>
                  Выходите на линию <br />и получайте заказы
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WayGridBox;
