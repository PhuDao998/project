import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './page/login';
import HomePage from './page/home';
import Admin from './page/admin';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/*' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
