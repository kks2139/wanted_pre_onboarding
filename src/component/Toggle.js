import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';

function Toggle(){
    const [isOn, setIsOn] = useState(false);

    const style = css`
        position: relative;
        display: flex;
        align-items: center;
        width: 60px;
        height: 27px;
        background-color: #cccccc;
        border-radius: 40px;
        margin: 100px;
        transition: .3s;
        cursor: pointer;
        
        .circle {
            position: absolute;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            background-color: white;
            transition: linear .2s;
        }

        .on {
            left: 37px;
        }
        .off {
            left: 3px;
        }
    `;

    const onClick = ()=>{
        setIsOn(!isOn);
    }

    return(
        <div css={style} onClick={onClick}>
            <div className={`circle ${isOn ? 'on' : 'off'}`}></div>
        </div>
    );
}

export default Toggle;