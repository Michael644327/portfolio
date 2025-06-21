import Home from './pages/Home';
import Calacular from './projects/JsDemos/pages/calacular';
import BookList from './projects/JsDemos/pages/booklist';
import Login from './projects/JsDemos/pages/login';
import timeCounting from './projects/JsDemos/pages/timecounting'
import Cart from './projects/JsDemos/pages/checkout/animal-product';
// import Cart from './projects/JsDemos/pages/shopping';
import DrawLottery from './projects/JsDemos/pages/drwalottery';

import AnimalPara from './projects/animalpara/index'
// import AnimalPara from './pages/animalpara/index';

const routes = [
  { path: "/", element: Home, name: "首頁" },
  {
    name: "功能練習",
    children: [
      { path: "/classwork/calacular", element: Calacular, name: "計算機" },
      { path: "/classwork/booklist", element: BookList, name: "書本清單篩選" },
      { path: "/classwork/login", element: Login, name: "登入" },
      { path: "/classwork/shopping", element: Cart, name: "購物車" },
      { path: "/jsdemo/timeCounting", element: timeCounting, name: "倒數器" },
      { path: "/jsdemo/drawLottery", element: DrawLottery, name: "抽樂透" }
    ]
  },
  {
    name: "作品集",
    children: [
      { path: "/animalpara", element: AnimalPara, name: "動物樂園" },
      { path: "https://github.com/Michael644327/knock2-project", name: "密室逃脫-悄瞧 (github)", ltype: "outside" }
    ]
  },
  {
    name: "VUE練習",
    path: "/vue/"
  },
  { path: "/classwork/login", element: Login },
  { path: "/classwork/calacular", element: Calacular },
  { path: "/classwork/booklist", element: BookList },
  { path: "/classwork/shopping", element: Cart },
  { path: "/jsdemo/timeCounting", element: timeCounting },
  { path: "/jsdemo/drawLottery", element: DrawLottery}

];

export default routes;