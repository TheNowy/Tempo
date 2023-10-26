import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Dropmenu from "./dropmenu/Dropmenu";
import scss from "./Header.module.scss";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0,
    },
  },
};

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
            <motion.ul
              className="container"
              variants={container}
              initial="hidden"
              animate="visible">
              <img src="../../../../logo.png" alt="" />
            </motion.ul>
            {/* <h3 className={scss.logo_text}>Lucky</h3> */}
          </NavLink>
          <motion.ul
            className="container"
            variants={container}
            initial="hidden"
            animate="visible">
            <div className={scss.links}>
              <NavLink to="https://discord" className={scss.linksD}>
                Сервер поддержки
              </NavLink>
              <NavLink to="/Commands" className={scss.linksD}>
                Команды
              </NavLink>
              <NavLink to="https://nowy.netlify.app" className={scss.linksD}>
                Nowy Bio
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
          </motion.ul>
        </div>
      </div>
      {openProfile && <Dropmenu />}
    </nav>
  );
};
