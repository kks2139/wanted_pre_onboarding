import React, { useState } from 'react';
import ReactDOM from 'react-dom';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';

function Modal(){
    const [isOn, setIsOn] = useState(false);

    const style = css`
        .button {
            padding: 15px 20px;
            background-color: var(--color-main);
            border-radius: 30px;
            color: white;
        }
    `;

    const setOnOff = ()=>{
        setIsOn(pre => !pre);
    }

    return(
        <div css={style}>
            <button className='button' onClick={setOnOff}>Open Modal</button>
            {ReactDOM.createPortal(
                <>
                    {isOn && 
                        <div className='modal'>
                            <MessageBox onClose={setOnOff}/>
                        </div>
                    }
                </>,
                document.querySelector('#root-modal')
            )}
        </div>
    );
}

function MessageBox({onClose}){
    const style = css`
        position: absolute;
        width: 300px;
        height: 100px;
        background-color: white;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .close {
            font-size: 20px;
            font-weight: bold;
            background-color: transparent;
            transform: translateY(-15px);
        }

        h4 {
            color: var(--color-main);
        }
    `;
    return (
        <div css={style}>
            <button className='close' onClick={onClose}>x</button>
            <h4>HELLO CODESTATES!</h4>
        </div>
    );
}

export default Modal;