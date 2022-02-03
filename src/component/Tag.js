import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';

function Tag(){
    const [input, setInput] = useState('');
    const [textList, setTextList] = useState([
        {text: 'CodeStates', id: 1234},
        {text: 'JJang', id: 12345},
    ]);

    const onChange = (e)=>{
        setInput(e.currentTarget.value);
    }

    const onClickRemove = (id)=>{
        setTextList(textList.filter(obj => obj.id !== id));
    }
    
    const onKeyDown = (e)=>{
        if(e.key === 'Enter' && input.trim()){
            setTextList(textList.concat({
                text: input,
                id: new Date().getTime()
            }));
            setInput('');
        }
    }

    const style = css`
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid var(--color-gray);
        border-radius: 8px;
        padding: 7px;
        width: 600px;
        height: 50px;

        &:focus-within {
            border-color: var(--color-main);
        }

        input {
            width: 100%;
            height: 100%;
            font-size: 14px;
            font-weight: bold;

            &::placeholder {
                color: var(--color-gray);
            }
        }
    `;

    return(
        <div css={style}>
            {textList.map(obj => (
                <TaggedText 
                    key={obj.id} 
                    textId={obj.id} 
                    text={obj.text} 
                    onClickRemove={onClickRemove}/>
            ))}
            <input 
                onChange={onChange} 
                onKeyDown={onKeyDown} 
                value={input} 
                placeholder='Press enter to add tags'/>
        </div>
    );
}

function TaggedText({textId, text, onClickRemove}){
    const onClick = ()=>{
        onClickRemove(textId);
    }

    const style = css`
        display: flex;
        align-items: center;
        height: 100%;
        padding: 7px;
        background-color: var(--color-main);
        border-radius: 8px;
        color: white;
        margin-right: 8px;

        span {
            margin-right: 8px;
        }

        .remove {
            border-radius: 50%;
            background-color: white;
            width: 17px;
            height: 17px;
            text-align: center;
            line-height: 10px;
        }
    `;

    return(
        <div css={style}>
            <span>{text}</span>
            <button className='remove' onClick={onClick}>x</button>    
        </div>
    );
}

export default Tag;