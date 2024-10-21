import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Rates = props => {
    const { items } = props;
    return (
        <div key={uuidv4()} className="rates">
            {items.map((item) => {
                return (
                    <span key={uuidv4()}>
                        <a key={uuidv4()} className="rateName" href={item.href}>{item.title}</a>
                        <span key={uuidv4()} className="rateRate">{item.rate}</span>
                        <span key={uuidv4()} className="rateDayChange">{item.dayChange}</span>
                    </span>
                )
            })}
        </div>
    );
};

export { Rates };