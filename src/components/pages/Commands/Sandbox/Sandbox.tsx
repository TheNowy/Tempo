import Style from "./Sandbox.module.scss";
import { useState } from "react";

const Sandbox = () => {
  const [toggleState, setToggleState] = useState(1);

  const ToggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <div className={Style.Page_Wrapper}>
        <div className={Style.Drop_Box}>
          <div
            className={
              toggleState === 1 ? Style.Drop_Uvs_Box : Style.Drop_Vs_Box
            }
            onClick={() => ToggleTab(1)}>
            Игроки
          </div>
          <div
            className={
              toggleState === 2 ? Style.Drop_Uvs_Box : Style.Drop_Vs_Box
            }
            onClick={() => ToggleTab(2)}>
            Главы
          </div>
          <div
            className={
              toggleState === 3 ? Style.Drop_Uvs_Box : Style.Drop_Vs_Box
            }
            onClick={() => ToggleTab(3)}>
            Администрация
          </div>
        </div>
        <div
          className={`${Style.Content} ${
            toggleState === 1 ? Style.Active_Content : ""
          }`}>
          <h1>Content 1</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            a! Deserunt sequi quas ipsam similique facilis veniam impedit,
            consequatur ex dicta vitae dolore soluta quisquam distinctio rerum
          </p>
        </div>
        <div
          className={`${Style.Content} ${
            toggleState === 2 ? Style.Active_Content : ""
          }`}>
          <h1>Content 2</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            a! Deserunt sequi quas ipsam similique facilis veniam impedit,
            consequatur ex dicta vitae dolore soluta quisquam distinctio rerum
          </p>
        </div>
        <div
          className={`${Style.Content} ${
            toggleState === 3 ? Style.Active_Content : ""
          }`}>
          <h1>Content 3</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            a! Deserunt sequi quas ipsam similique facilis veniam impedit,
            consequatur ex dicta vitae dolore soluta quisquam distinctio rerum
          </p>
        </div>
      </div>
    </>
  );
};

export default Sandbox;
