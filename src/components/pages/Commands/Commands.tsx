import Style from "./Commands.module.scss";
import { Link } from "react-router-dom";
import Sandbox from "./Sandbox/Sandbox";
import { motion } from "framer-motion";
// import { Container } from "@mui/material";

const container = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0,
    },
  },
};

const Commands = () => {
  return (
    <>
      <div className={Style.commands_main}>
        <motion.ul
          className="container"
          variants={container}
          initial="hidden"
          animate="visible">
          <div className={Style.container}>
            <div className={Style.Home_Content}>
              <div className={Style.main_title}>
                <h3>Команды</h3>
              </div>
              <div className={Style.mini_title}>
                <p>Всего: 25 игроков</p>
                <Link to="https://discord.gg/W8BHbJM7">
                  <button className={Style.discord_button}>Discord</button>
                </Link>
              </div>
              <div className={Style.cva_members}>
                <div className={Style.menu_sva}>
                  <Sandbox />
                </div>
              </div>
            </div>
          </div>
        </motion.ul>
      </div>
    </>
  );
};

export default Commands;
