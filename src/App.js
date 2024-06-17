import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { mycontext } from './components/context';
import Home from './components/home';
import Nav from './components/navbar/nav';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <mycontext.Provider >
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
