import Style from "./MainTitle.module.scss";

const MainTitle = () => {
  const scrollToContacts = () => {
    const contactsElement = document.getElementById("contacts");
    if (contactsElement) {
      contactsElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className={Style.Title_Wrapper}>
        <div className={Style.main_title}>
          <h1>Стань водителем Yandex Такси и начни зарабатывать</h1>
          {/* <p>
            <span>MangoKG</span> — волшебный мир свободы и заработка! Стань
            таксистом сегодня и ощути ветер перемен вместе с нами!.
          </p> */}
          <div className={Style.Btn_Wrapper}>
            <button className={Style.Discord_Add} onClick={scrollToContacts}>
              Подключится
            </button>
            {/* <button className={Style.App_But}>Подробнее</button> */}
          </div>
        </div>
        <div className={Style.benefits_fast}>
          <div className={Style.benefits_box}>
            <div className={Style.benef_box}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainTitle;
