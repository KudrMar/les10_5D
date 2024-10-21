import React from 'react';
import { HotNews } from './HotNews';
import { NewsItem } from './NewsItem';
import { Rates } from './Rates';

const hotNews = [
    { href: '#', text: 'Сейчас в СМИ' },
    { href: '#', text: 'в Германии' },
    { href: '#', text: 'Рекомендуем' }
];

const newsList = [
    {
        icon: 'icon',
        href: '#',
        title: 'Путин упростил получение автомобильных номеров'
    },
    {
        icon: 'icon',
        href: '#',
        title: 'В команде Зеленского раскрыли план реформ на Украине'
    },
    {
        icon: 'icon',
        href: '#',
        title: '"Турпомощь" прокоментировала гибель десятков россиян в Анталье'
    },
    {
        icon: 'icon',
        href: '#',
        title: 'Суд закрыл дело Демпартии США против России'
    },
    {
        icon: 'icon',
        href: '#',
        title: 'На Украине призвали создать ракеты для удара по Москве'
    }
];

const rateList = [
    { href: '#', title: 'USD MOEX', rate: '$63.5', dayChange: '+0.09' },
    { href: '#', title: 'EURO MOEX', rate: '$70.86', dayChange: '+0.14' },
    { href: '#', title: 'НЕФТЬ', rate: '$64.9', dayChange: '+1.63' }
];

const NewsList = () => {
    return (
        <div className='topLeft'>
            <HotNews items={hotNews} />
            <NewsItem items={newsList} />
            <Rates items={rateList} />
        </div>
    );
};

export { NewsList };