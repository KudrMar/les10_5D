
import React from 'react';

const Advertisement = (props) => {
    const { href, title, text } = props.item;
    return (
        <div className='topRight'>
            <a href={href}>
                <img src="https://dummyimage.com/35x35/858d94/d5dade" alt="Advertisement" />
                <h5>{title}</h5>
            </a>
            <span>{text}</span>
        </div>
    );
}

export { Advertisement };