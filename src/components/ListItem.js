import React from 'react';
import { v4 as uuidv4 } from 'uuid';
const ListItem = props => {
    const { item } = props;
    return (
        <div key={uuidv4()}>
            <a key={uuidv4()} className="itemBottom" href={item.href}>{item.title}</a>
            <span key={uuidv4()}>{item.text}</span>
        </div>
    );
};

export { ListItem };