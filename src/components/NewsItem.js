import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const NewsItem = props => {
    const { items } = props;
    return (
        <div key={uuidv4()} className="news">
            {items.map((item) =>
                <span key={uuidv4()}>
                    <a href={item.href}>{item.title}</a>
                </span>
            )}
        </div>
    );
};

export { NewsItem };