import React, { Component } from 'react';

export const Navigation = (props) => {
    return (
        <div className='navigation-container'>
            <button onClick={async () => await props.fetchMakeup('eyeshadow')}>EYES</button>
            <button onClick={async () => await props.fetchMakeup('lipstick')}>LIPS</button>
            <button onClick={async () => await props.fetchMakeup('blush')}>CHEEKS</button>
            <button onClick={async () => await props.fetchMakeup('nail_polish')}>NAILS</button>
        </div>
    )
};
