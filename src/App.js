// import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Inicio from './components/Inicio'
import Personaje from './components/Personaje'
import Navbar from './components/Navbar';


function App() {
  return (
    <div className='App'>
      <div className='cabeza'>
        <Navbar></Navbar>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio></Inicio>}></Route>
          <Route path='/personaje/:id' element={<Personaje></Personaje>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
