import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Style from "./Header.module.scss";
import { AnimatePresence } from "framer-motion";
import Dropmenu from "./dropmenu/Dropmenu";

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
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToContacts = () => {
    const contactsElement = document.getElementById("contacts");
    if (contactsElement) {
      contactsElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav>
      <div
        className={
          headerScroll ? `${Style.header} ${Style.active}` : `${Style.header}`
        }>
        <div className={Style.header_wrapper}>
          <NavLink to="/" className={Style.logo}>
            <h1>MangoKG</h1>
          </NavLink>
          <div className={Style.links}>
            <button className={Style.linksD} onClick={scrollToContacts}>
              Стать водителем
            </button>
            {/* Add other navigation links as needed */}
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

// Rest of the component remains unchanged
