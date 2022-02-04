import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';

const TEST_LIST = [
    'antique',
    'vintage',
    '중고A급',
    'rustic',
    'refurbished',
    'test123',
]

function AutoComplete(){
    const [filteredList, setFilteredList] = useState([]);
    const [input, setInput] = useState('');
    const hasFiltered = filteredList.length > 0; 

    const onChange = (e)=>{
        const value = e.currentTarget.value;
        filterText(value);
        setInput(value);
    }

    const filterText = (value)=>{
        const filtered = TEST_LIST.filter(str => str.indexOf(value || null) > -1);
        setFilteredList(filtered);
    }
    
    const style = css`
        --border: 18px;

        border-radius: var(--border);
        width: 350px;

        &:focus-within {
            box-shadow: 0 6px 15px -10px black;
        }

        input {
            width: 100%;
            height: 40px;
            padding: 0 15px;
            border: 1px solid var(--color-gray);
            border-radius: ${hasFiltered ? 'var(--border) var(--border) 0 0' : 'var(--border)'};
        }

        .text-box {
            width: 100%;
            border-radius: 0 0 var(--border) var(--border);
        }

        li {
            padding: 5px 15px;

            &:hover {
                background-color: #e8e8e8;
            }
            &:last-child {
                border-radius: 0 0 var(--border) var(--border);
            }
        }
    `;

    return(
        <div css={style}>
            <input onChange={onChange} value={input}/>
            <ul className='text-box'>
                {filteredList.map((txt, i) => (
                    <li key={i}>{txt}</li>
                ))}
            </ul>
        </div>
    );
}

export default AutoComplete;