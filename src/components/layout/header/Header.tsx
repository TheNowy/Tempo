import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Dropmenu from "./dropmenu/Dropmenu";
import Style from "./Header.module.scss";
import { AnimatePresence, motion } from "framer-motion";

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

// const dropmenuAnimation = {
//   open: {
//     opacity: 1,
//     scale: 1,
//     y: 25,
//     transition: {
//       opacity: { duration: 0.5 },
//     },
//   },
//   closed: {
//     opacity: 0,
//     scale: 1,
//     y: -20,
//     transition: {
//       opacity: { duration: 1 },
//     },
//   },
//   exit: {
//     opacity: 0,
//     scale: 1,
//     y: -20,
//     transition: {
//       opacity: { duration: 1 },
//     },
//   },
// };

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
          headerScroll ? `${Style.header} ${Style.active}` : `${Style.header}`
        }>
        <div className={Style.header_wrapper}>
          <motion.ul
            className="container"
            variants={container}
            initial="hidden"
            animate="visible">
            <NavLink to="/" className={Style.logo}>
              <img src="../../../../logo.png" alt="" />
            </NavLink>
            <div className={Style.links}>
              <NavLink to="/" className={Style.linksD}>
                Стать водителем
              </NavLink>
              <NavLink to="/" className={Style.linksD}>
                Как начать
              </NavLink>
              <div
                className={`${Style.burger} ${isOpen ? Style.open : ""}`}
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
      <AnimatePresence>
        {openProfile && (
          // <motion.div
          //   key="dropmenu"
          //   className={Style.dropmenu}
          //   initial="closed"
          //   animate={openProfile ? "open" : "closed"}
          //   exit="exit"
          //   variants={dropmenuAnimation}
          //   onAnimationComplete={() => {
          //     if (!openProfile) {
          //       setOpenProfile(false);
          //     }
          //   }}>
          <Dropmenu />
          // </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
