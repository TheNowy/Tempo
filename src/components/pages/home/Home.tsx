import scss from "./Home.module.scss";
// import { Tilt } from "react-tilt";

const Home = () => {
  return (
    <>
      <div className={scss.page_wrapper}>
        <div className={scss.container}>
          <div className={scss.home_content}>
            <div className={scss.main_page}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
