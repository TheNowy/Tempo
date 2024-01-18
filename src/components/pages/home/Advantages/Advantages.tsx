import Style from "./Advantages.module.scss";

const Advantages = () => {
  const scrollToContacts = () => {
    const contactsElement = document.getElementById("contacts");
    if (contactsElement) {
      contactsElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className={Style.ready_box}>
        <h1>Готовы начать свое приключение?</h1>
        <div className={Style.Btn_Wrapper}>
          <button className={Style.Discord_Add} onClick={scrollToContacts}>
            Подключится
          </button>
        </div>
      </div>
    </>
  );
};

export default Advantages;
