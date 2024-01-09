import Style from "./Advantages.module.scss";

const Advantages = () => {
  return (
    <>
      <div className={Style.ready_box}>
        <h1>Готовы начать свое приключение?</h1>
        <div className={Style.Btn_Wrapper}>
          <button className={`${Style.Discord_Add} ${Style.App_But}`}>
            Стать водителем
          </button>
          <button className={Style.App_But}>Как начать</button>
        </div>
      </div>
    </>
  );
};

export default Advantages;
