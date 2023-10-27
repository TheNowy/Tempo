import Style from "./Aboutbot.module.scss";

const Aboutbot = () => {
  return (
    <>
      <div className={Style.About_wrapper}>
        <div className={Style.Info}>
          <h1>Скоро...</h1>
        </div>
        <img src="../../../../../public/Rimuru-PNG-Clipart.png" alt="" />
      </div>
    </>
  );
};

export default Aboutbot;
