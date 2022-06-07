import React, { useState, useRef } from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';

const HEIGHT = 30;

function Test(){
    const list = [1,2,3,4,5,6,7,8,9];
    const timerId = useRef(null);
    const divRef = useRef();

    const onScroll = ()=>{
        if(timerId.current) clearTimeout(timerId.current);
        timerId.current = setTimeout(()=>{
            
            const {top} = divRef.current.getBoundingClientRect();
            console.log(top);


            timerId.current = null;
        }, 500);
    }

    const style = css`
        position: relative;
        overflow: hidden;
        box-shadow: 0 0 0 2px black;

        .items {
            overflow: hidden;
            height: 200px;
            /* border: 1px solid yellow; */
            .item {
                transform: translateY(300%);
                width: 70px;
                height: ${HEIGHT}px;
                background-color: gray;
                text-align: center;
                color: white;
                box-shadow: inset 0 0 0 2px red;
            }
        }
        .center {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 100%;
            height: ${HEIGHT}px;
            box-shadow: inset 0 0 0 2px blue;
            transform: translate(-50%, -50%);
        }
    `;

    return(
        <div css={style}>
            <div className='items' onScroll={onScroll}>
                {list.map((d, i) => (
                    <div className='item' key={i}>{d}</div>
                ))}
            </div>
            <div className='center' ref={divRef}></div>
        </div>
    );
}

export default Test;