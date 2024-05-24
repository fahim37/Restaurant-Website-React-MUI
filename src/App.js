import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contactus from './Pages/Contactus'
import Menu from './Pages/Menu'
import Pagenotfound from './Pages/Pagenotfound'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/menu' element={<Menu/>}/> 
          <Route path='/contact' element={<Contactus/>}/>
          <Route path='*' element={<Pagenotfound/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
