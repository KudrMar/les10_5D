import React from 'react';
import { ListItem } from './ListItem';
import { v4 as uuidv4 } from 'uuid';
const weather = [
    { href: '#', title: 'Утром +17' },
    { href: '#', title: 'Днем +20' },
];

const lastVisiting = [
    { href: '#', title: 'Недвижимость', text: ' - о сталинках' },
    { href: '#', title: 'Маркет', text: ' - люстры и светильники' },
    { href: '#', title: 'Авто.ру', text: ' - привод 4х4 до 500 000' },
];

const maps = [
    { href: '#', title: 'Расписания', text: '' },
];
const tvProgramm = [
    { href: '#', title: '02:00 THT.Best', text: ' THT International' },
    { href: '#', title: '02:15 Джинглики', text: ' Карусель INT' },
    { href: '#', title: '02:25 Наедине со всеми', text: ' Первый' }
];

const broadcast = [
    { href: '#', title: 'Управление как исскуство', text: ' Успех' },
    { href: '#', title: 'Ночь. Мир в это время', text: ' earthTV' },
    { href: '#', title: 'Андрей Возн...', text: ' Соверенно секретно' }
];
const BottomBlock = () => {
    return (
        <div key={uuidv4()} className='bottomBlock'>
            <div key={uuidv4()} className='firstColumn column'>
                <div key={uuidv4()} className='weatherTitle'>
                    <a key={uuidv4()} href='#' className='bottomTitle'>Погода</a>
                    <img key={uuidv4()} className="weatherImg" src="" alt="Погода" />
                    <span key={uuidv4()} className="weatherValue">+17</span>
                </div>
                <div key={uuidv4()} className='InfoBlock'>
                    {weather.map((item) => <ListItem item={item} key={uuidv4()}> </ListItem>)}
                </div>
                <a key={uuidv4()} href='#' className='bottomTitle'>Посещаемое</a>
                <div key={uuidv4()} className='InfoBlock'>
                    {lastVisiting.map((item) => <ListItem item={item} key={uuidv4()}> </ListItem>)}
                </div>
            </div>
            <div className='secondColumn column'>
                <a href='#' className='bottomTitle'>Карта Германии</a>
                <div key={uuidv4()} className='InfoBlock'>
                    {maps.map((item) => <ListItem item={item} key={uuidv4()}> </ListItem>)}
                </div>
                <a href='#' className='bottomTitle'>Телепрограмма</a>
                <div key={uuidv4()} className='InfoBlock'>
                    {tvProgramm.map((item) => <ListItem item={item} key={uuidv4()}> </ListItem>)}
                </div>
            </div>
            <div className='thirdColumn column'>
                <div className='broadcastTitle'>
                    <a href='#' className='bottomTitle'>Эфир</a>
                    <img className="wbroadcastImg" src="" alt="Эфир" />
                </div>
                <div key={uuidv4()} className='InfoBlock>'>
                    {broadcast.map((item) => <ListItem item={item} key={uuidv4()}> </ListItem>)}
                </div>
            </div>
        </div>
    );
};

export { BottomBlock };