import React from "react";
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import Modal from "./component/Modal";
import Toggle from "./component/Toggle";

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
    </div>
  );
}

export default App;
