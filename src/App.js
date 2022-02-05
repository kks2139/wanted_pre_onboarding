import React from "react";
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import Modal from "./component/Modal";
import Toggle from "./component/Toggle";
import Tab from "./component/Tab";
import Tag from "./component/Tag";
import AutoComplete from "./component/AutoComplete";
import ClickToEdit from "./component/ClickToEdit";
import Wrapper from "./component/Wrapper";

function App() {

  const style = css`
    min-height: 100vh;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  return (
    <div css={style}>
      <Wrapper title="Toggle">
        <Toggle/>
      </Wrapper>
      
      <Wrapper title="Modal">
        <Modal/>  
      </Wrapper>

      <Wrapper title="Tab">
        <Tab>
          <div>Tab menu ONE</div>
          <div>Tab menu TWO</div>
          <div>Tab menu THREE</div>
        </Tab>  
      </Wrapper>

      <Wrapper title="Tag">
        <Tag/>
      </Wrapper>

      <Wrapper title="AutoComplete">
        <AutoComplete/>
      </Wrapper>

      <Wrapper title="ClickToEdit">
        <ClickToEdit/>
      </Wrapper>
    </div>
  );
}

export default App;
