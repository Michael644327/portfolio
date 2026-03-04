// import Home from '../pages/Home';
import Home from '../../projects/JsDemos/pages/index'
import Calacular from '../../projects/JsDemos/pages/calacular';
import BookList from '../../projects/JsDemos/pages/booklist';
import Login from '../../projects/JsDemos/pages/login';
// import timeCounting from '../../projects/JsDemos/pages/timecounting'
// import timeCount from '../../projects/JsDemos/pages/timerCount'
import Cart from '../../projects/JsDemos/pages/checkout/animal-product';
import CardsReverse from '../../projects/JsDemos/pages/CardsReverse';
// import Cart from './projects/JsDemos/pages/shopping';
import DrawLottery from '../../projects/JsDemos/pages/drwalottery';

export const jsRoutes = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: 'calacular',
    element: <Calacular />,
    meta: {
      label: "計算機",
      showInNav: true,
      showInMainNav: true,
    },
  },
  {
    path: "booklist", 
    element: <BookList />,
    meta: { label: "書本清單篩選",
      showInNav: true,
      showInMainNav: true, }
  },
  {
    path: "login", element: <Login />,
    meta: { label: "登入",
      showInNav: true,
      showInMainNav: true, }
  },
  {
    path: "shopping", element: <Cart />,
    meta: { label: "購物車",
      showInNav: true,
      showInMainNav: true, }
  },
  {
    path: "timeCounting", element: <timeCounting />,
    meta: { label: "倒數器",
      showInNav: true,
      showInMainNav: true, }
  },
  {
    path: "timeCounting2", element: <timeCount />,
    meta: { label: "倒數器2",
      showInNav: true,
      showInMainNav: true, }
  },
  {
    path: "drawLottery", element: <DrawLottery />,
    meta: { label: "抽樂透",
      showInNav: true,
      showInMainNav: true, }
  },
    {
    path: "cardreverse", 
    element: <CardsReverse />,
    meta: { label: "翻牌",
      showInNav: true,
      showInMainNav: true, }
  }
];