import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';

function Tab({children}){
    const [selectedIndex, setSelectedIndex] = useState(0);
    const childs = Array(children.length).fill(0); 

    const onClickTab = (index)=>{
        setSelectedIndex(index);
    }

    const style = css`
        width: 600px;

        .tab-box {
            width: 100%;
            display: flex;
        }

        .content {
            width: 100%;
            height: 200px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    `;

    return(
        <div css={style}>
            <div className='tab-box'>
                {childs.map((el, i)=> (
                    <TabButton 
                        key={i} 
                        onClickTab={onClickTab} 
                        index={i}
                        isSelected={i == selectedIndex}
                        text={`Tab ${i+1}`}/>
                ))}
            </div>
            <div className='content'>
                {children[selectedIndex]}
            </div>
        </div>
    );
}

function TabButton({onClickTab, index, isSelected, text}) {
    const onClick = ()=>{
        onClickTab(index);
    }

    const style = css`
        flex-grow: 1;
        height: 40px;
        padding: 0 15px;
        font-size: 16px;
        font-weight: 500;
        text-align: left;
        transition: .1s;

        ${isSelected ? `
            background-color: var(--color-main);
            color: white;
        ` : `
            background-color: var(--color-gray);
            color: gray;
        `}
    `;

    return(
        <button css={style} onClick={onClick}>{text}</button>
    );
}

export default Tab;