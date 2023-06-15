import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//--------------PAGES----------------//
import Login from './pages/login';
import Home from './pages/Home';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
