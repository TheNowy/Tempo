import scss from "./Home.module.scss";
import MainTitle from "./MainTitle/MainTitle";
import Gridbox from "./GridBox/Gridbox";
import { motion } from "framer-motion";
// import { Tilt } from "react-tilt";

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

const Home = () => {
  return (
    <>
      <div className={scss.page_wrapper}>
        <div className={scss.container}>
          <motion.ul
            className="container"
            variants={container}
            initial="hidden"
            animate="visible">
            <div className={scss.home_content}>
              <MainTitle />
              <Gridbox />
            </div>
          </motion.ul>
        </div>
      </div>
    </>
  );
};

export default Home;
