import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './page/login';
import Admin from './page/admin';
import HomePage from './components/HomePage'
import Dashboard from './components/Dashboard';
import Dashboard1 from './components/Dashboard1';
import Dashboard2 from './components/Dashboard2';
import Dashboard3 from './components/Dashboard3';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}>
            <Route path='' element={<Dashboard/>} />
            <Route path='dashboard1' element={<Dashboard1 />} />
            <Route path='dashboard2' element={<Dashboard2 />} />
            <Route path='dashboard3' element={<Dashboard3 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
