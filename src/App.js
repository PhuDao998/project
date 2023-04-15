import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './page/login';
import HomePage from './page/home';
import Admin from './page/admin';
import './index.css'

import HomePageDemo from './components/homePageDemo'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/sibar' element={<HomePageDemo />} />
        <Route path='/*' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
