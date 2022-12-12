import '@/assets/styles/main.scss';

import HomePage from './modules/core/pages/HomePage';
import NotFoundPage404 from './modules/core/pages/NotFoundPage404';
import SubPage from './modules/core/pages/SubPage';
import News from'./modules/core/pages/News';
import Comics from './modules/core/pages/Comics';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="main">
      <Routes>
        <Route path='/' exact element={ <HomePage/> }></Route>
        <Route path='/join' exact element={ <SubPage/> }></Route>
        <Route path='/NEWS' exact element={ <News/> }></Route>
        <Route path='/COMICS' exact element={ <Comics/> }></Route>
        <Route path='*' exact element={ <NotFoundPage404/> }></Route>
      </Routes>
    </div>
  );
}

export default App;
