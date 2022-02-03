import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';

function Toggle(){
    const [isOn, setIsOn] = useState(false);

    const onClick = ()=>{
        setIsOn(!isOn);
    }

    const style = css`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 150px;

        .wrapper {
            position: relative;
            display: flex;
            align-items: center;
            width: 60px;
            height: 27px;
            background-color: var(--color-gray);
            background-image: linear-gradient(0, var(--color-main), var(--color-main));
            background-position: ${isOn ? '0' : '-60px'}, 0;
            background-repeat: no-repeat;
            border-radius: 40px;
            transition: .3s;
            cursor: pointer;
        }
        
        .circle {
            position: absolute;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            background-color: white;
            transition: linear .2s;

           &.on {
                left: 35px;
            }

            &.off {
                left: 5px;
            }
        }

        span {
            margin-top: 10px;
        }
    `;

    return(
        <div css={style}>
            <div className='wrapper' onClick={onClick}>
                <div className={`circle ${isOn ? 'on' : 'off'}`}></div>
            </div>
            <span>Toggle Switch {isOn ? 'ON' : 'OFF'}</span>
        </div>
    );
}

export default Toggle;