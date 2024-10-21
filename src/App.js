
import './App.css';
import { NewsList } from './components/NewsList';
import { Advertisement } from './components/Advertisement';
import { SearchBlock } from './components/SearchBlock';
import { Banner } from './components/Banner';
import { BottomBlock } from './components/BottomBlock';

const advertisment = {
  img: './img/Ad',
  href: '#',
  title: 'Работа над ошибками',
  text: 'Смотрите на Яндексе и запоминайте',
};
function App() {
  return (
    <div className="App">
      <div className="topBlock">
        <NewsList />
        <Advertisement item={advertisment} />
      </div>
      <SearchBlock />
      <Banner />
      <BottomBlock />
    </div>
  );
}

export default App;
