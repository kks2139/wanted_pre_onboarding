import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';

function Wrapper({title='', children}){

    const style = css`
        border: 1px solid var(--color-gray);
        border-radius: 10px;
        padding: 0 20px;
        margin-bottom: 50px;

        > .container {
            box-sizing: content-box;
            width: 700px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px 0;
        }
    `;

    return(
        <section css={style}>
            <h3>{title}</h3>
            <div className='container'>
                {children}
            </div>
        </section>
    );
}

export default Wrapper;