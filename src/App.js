import React from "react";
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import Modal from "./component/Modal";
import Toggle from "./component/Toggle";
import Tab from "./component/Tab";
import Tag from "./component/Tag";

function App() {

  const style = css`
    min-height: 100vh;
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  `;

  return (
    <div css={style}>
      <Toggle/>
      <Modal/>
      <Tab>
        <div>Tab menu ONE</div>
        <div>Tab menu TWO</div>
        <div>Tab menu THREE</div>
      </Tab>
      <Tag/>
    </div>
  );
}

export default App;
