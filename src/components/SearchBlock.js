import React from 'react';
import { v4 as uuidv4 } from 'uuid';
const searchDirection = [
  { href: '#', title: 'Видео' },
  { href: '#', title: 'Картинки' },
  { href: '#', title: 'Новости' },
  { href: '#', title: 'Карты' },
  { href: '#', title: 'Маркет' },
  { href: '#', title: 'Переводчик' },
  { href: '#', title: 'Эфир' },
  { href: '#', title: 'ещё' }
]
const SearchBlock = () => {
  return (
    <div className='searchBlock'>
      <div className='searchDirection'>
        {searchDirection.map((item) => <a key={uuidv4()} href={item.href}>{item.title}</a>)}
      </div>
      <form>
        <input type='text' className='input-text' />
        <input type='button' value='Найти' />
      </form>
      <div className='searchNote'> Найдется все. Нопример фаза луны сегодня</div>
    </div>
  );
}

export { SearchBlock };