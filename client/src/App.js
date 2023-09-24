import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Register } from './component/register';
import { Login } from './component/login';
import { Webpage } from './component/Servies';
import { Booking } from './component/Booking';
import { Ac } from './component/Ac';
import { Electronic } from './component/electronic';
import { Update } from './component/Update';
import { Getdelete } from './component/Delete';

function App() {
  return (
    // <Register/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/testing/:id" element={<Webpage/>}/>
      <Route path='/change/:id' element={<Update/>}/>.
      <Route path='/viste' element={<Booking/>}/>
      <Route path='/viste2' element={<Ac/>}/>
      <Route path='/viste3' element={<Electronic/>}/>
      <Route path='/remove/:id' element={<Getdelete/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
