import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { mycontext } from './components/context';
import Home from './components/home';
import Nav from './components/navbar/nav';
import { useState } from 'react';
import { furnitures } from './components/datafile';

function App() {
  const [furniture,setfurniture] = useState(furnitures)
  const values = {
    furniture,setfurniture
  }
  return (
    <div className="App">
      <BrowserRouter>
      <mycontext.Provider value={values}>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/nav' element={<Nav/>}/>
      </Routes>
      </mycontext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
