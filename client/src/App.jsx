import './app.scss';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Watch from './pages/watch/Watch';
import { BrowserRouter, Routes, Route } from 'react-router-dom'



const App = () => {
  // const user = false;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/series' element={<Home type='series'/>}/>
          <Route exact path='/movies' element={<Home type='movie'/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={< Register/>}/>
          <Route path='/watch' element={<Watch/>}/>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
