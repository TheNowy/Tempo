import Style from "./MainTitle.module.scss";

const MainTitle = () => {
  return (
    <>
      <div className={Style.Title_Wrapper}>
        <div className={Style.main_title}>
          <h1>
            Мощный <span>инструмент</span> для вашего сервера
          </h1>
          <p>
            <span>Tempo</span> — многофункциональный бот, предназначенный для улучшения и
            защиты вашего сервера Discord.
          </p>
          <div className={Style.Btn_Wrapper}>
            <button className={`${Style.Discord_Add} ${Style.App_But}`}>
              Добавить в Discord
            </button>
            <button className={Style.App_But}>
              Подробнее
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainTitle;
