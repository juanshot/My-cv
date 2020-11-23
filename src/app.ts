import './scss/app.scss';
import MainCard from './components/MainCard';
import Menu from './components/Menu';
import DetailCard from './components/DetailCard';

const render = (selectedItem: string = 'detail') => {
  reset();
  DetailCard(selectedItem);
  MainCard();
  Menu(render, selectedItem);
};

const reset = () => {
  const rootDiv = document.getElementById('root') as HTMLDivElement;
  rootDiv.innerHTML = '';
};

render('detail');
