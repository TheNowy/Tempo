import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Dropmenu from "./dropmenu/Dropmenu";
import scss from "./Header.module.scss";

export const Header: React.FC = () => {
  const [headerScroll, setHeaderScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      if (typeof window !== "undefined" && window.scrollY >= 10) {
        setHeaderScroll(true);
      } else {
        setHeaderScroll(false);
      }
    };

    changeBackground();
    -window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div
        className={
          headerScroll ? `${scss.header} ${scss.active}` : `${scss.header}`
        }>
        <div className={scss.header_wrapper}>
          <NavLink to="/" className={scss.logo}>
            <img src="../../../../../logo.png" alt="" />
            {/* <h3 className={scss.logo_text}>Lucky</h3> */}
          </NavLink>
          <div className={scss.links}>
            <NavLink to="https://discord.gg/HpBkVca2" className={scss.linksD}>
              Дискорд Сервер
            </NavLink>
            <NavLink to="/" className={scss.linksD}>
              Команды
            </NavLink>
            <NavLink to="https://nowy.netlify.app" className={scss.linksD}>
              Nowy
            </NavLink>
            <div
              className={`${scss.burger} ${isOpen ? scss.open : ""}`}
              onClick={() => {
                setOpenProfile((prev) => !prev);
                toggleMenu();
              }}>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      {openProfile && <Dropmenu />}
    </nav>
  );
};
