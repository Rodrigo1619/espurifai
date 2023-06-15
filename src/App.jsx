import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//--------------PAGES----------------//
import Login from './pages/login';
import Home from './pages/Home';
import Register from './pages/Register';
import MainPage from './pages/MainPage'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/mainpage' element={<MainPage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
