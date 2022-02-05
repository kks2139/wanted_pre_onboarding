import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';

function ClickToEdit(){
    const [inputs, setInputs] = useState({
        name: '김코딩',
        age: 20,
        name_final: '김코딩',
        age_final: 20,
    });

    const onChange = (e)=>{
        const {value, name} = e.currentTarget;
        setInputs({
            ...inputs,
            [name]: value
        });
    }

    const onBlur = (e)=>{
        const {value, name} = e.currentTarget;
        setInputs({
            ...inputs,
            [name + '_final']: value
        });
    }

    const style = css`
        display: flex;
        flex-direction: column;
        align-items: center;

        .row {
            display: flex;
            align-items: center;
            margin-bottom: 20px;

            input {
                border: 1px solid var(--color-gray);
                padding: 5px 10px;
                margin-left: 10px;
                &:focus {
                    border-color: var(--color-main);
                }
            }
        }
    `;

    return(
        <div css={style}>
            <div className='row'>
                <span>이름</span>
                <input onChange={onChange} name='name' onBlur={onBlur} value={inputs.name}/>
            </div>
            <div className='row'>
                <span>나이</span>
                <input onChange={onChange} name='age' onBlur={onBlur} value={inputs.age}/>
            </div>
            <span>이름 {inputs.name_final} 나이 {inputs.age_final}</span>
        </div>
    );
}

export default ClickToEdit;