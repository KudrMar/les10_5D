import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const HotNews = props => {
    const { items } = props;
    return (
        <div key={uuidv4()} className="hotNews">
            <span key={uuidv4()}>
                {items.map((item) =>
                    <a key={uuidv4()} href={item.href}>{item.text}</a>)}
            </span>
            <span className='date'>31 июня, среда 02 32</span>
        </div>
    )
};

export { HotNews };
