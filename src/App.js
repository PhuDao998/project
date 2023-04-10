import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './page/login';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<>Home</>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
