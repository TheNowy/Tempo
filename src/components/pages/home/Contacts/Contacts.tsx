import React, { useState, useEffect } from "react";
import axios from "axios";
import scss from "./Conctacts.module.scss";
import Modal from "react-modal";

const Contacts: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [alertMessage, setAlertMessage] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const phone = useState("+996 ");
  const TOKEN = `6201317143:AAFo6tQ_BVQpE5hK2F5f47mkSesKYQRkeo8`;
  const CHAT_ID = "1814654847";
  const API_URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  const messageModel = (): string => {
    let messageTG = `Name: <b>${username}</b>\n`;
    messageTG += `Phone: <b>${email}</b>\n`;

    return messageTG;
  };

  useEffect(() => {
    if (isModalOpen) {
      const timer = setTimeout(() => {
        setIsModalOpen(false);
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isModalOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios
      .post(API_URL, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: messageModel(),
      })
      .then(() => {
        setIsModalOpen(true);
        setUsername("");
        setEmail("");
      })
      .catch((error) => {
        console.error(
          "Ошибка при отправке сообщения, вероятно, сервера выключены или находятся в разработке",
          error
        );
        setAlertMessage(
          "Ошибка при отправке сообщения, вероятно, сервера выключены или находятся в разработке"
        );
      });
  };

  useEffect(() => {
    if (alertMessage) {
      alert(alertMessage);
      setAlertMessage("");
    }
  }, [alertMessage]);

  return (
    <>
      <div className={scss.page_wrapper}>
        <div className={scss.container}>
          <div className={scss.home_content}>
            <h1>Оставьте заявку</h1>
            {/* <div
              className={`${scss.gif_image} ${
                headerScroll ? scss.active : ""
              }`}>
              <h1 className={scss.h1}>Contact Me</h1>
            </div> */}
            <form className={scss.form} onSubmit={handleSubmit}>
              <label className={scss.label} htmlFor="name">
                Имя
                <input
                  id="name"
                  className={scss.input}
                  type="text"
                  placeholder="Ваше Имя"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </label>
              <label className={scss.label} htmlFor="email">
                Phone
                <input
                  id="phone"
                  className={scss.input}
                  placeholder="+996"
                  type="tel"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
              <button type="submit" className={scss.button}>
                Отправить
              </button>
            </form>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Message Sent Modal"
        className={scss.modal}
        overlayClassName={scss.modalOverlay}>
        <h2>Сообщение отправлено!</h2>
        <p>
          Спасибо! Ваше сообщение было успешно отправлено. Ожидайте ответа в
          течение дня.
        </p>
      </Modal>
    </>
  );
};

export default Contacts;
