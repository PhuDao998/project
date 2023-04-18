import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Login from './page/login';
import { AuthProvider } from "./contexts/Authenticate";
// import PrivateRoute from "./components/Router/PrivateRoute"
// import Admin from './page/admin';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard';
import Dashboard1 from './components/Dashboard1';
import Dashboard2 from './components/Dashboard2';
import Dashboard3 from './components/Dashboard3';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route exact path='/' element={<HomePage />}>
            <Route path='' element={<Dashboard />} />
            <Route path='dashboard1' element={<Dashboard1 />} />
            <Route path='dashboard2' element={<Dashboard2 />} />
            <Route path='dashboard3' element={<Dashboard3 />} />
          </Route>
          <Route path='/login' element={<Login />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
