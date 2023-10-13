import Style from "./Commands.module.scss";
import { Link } from "react-router-dom";
import Sandbox from "./Sandbox/Sandbox";

const Commands = () => {
  return (
    <>
      <div className={Style.commands_main}>
        <div className={Style.main_title}>
          <h3>
            cva к<span>оманда</span>
          </h3>
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
    </>
  );
};

export default Commands;
