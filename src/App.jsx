import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//--------------PAGES----------------//
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import MainPage from './pages/MainPage';
import Song from './pages/Song'
import Playlist from './pages/Playlist';
import Users from './pages/Users';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/mainpage' element={<MainPage/>}/>
          <Route path='/song' element={<Song/>}/>
          <Route path='/playlist' element={<Playlist/>}/>
          <Route path='/user' element={<Users/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
