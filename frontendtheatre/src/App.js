import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Adminview from './components/Adminview'
import Customerview from './components/Customerview'
import Moviepage from './components/Moviepage';
import Bookticket from './components/Bookticket';


function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/adminview" element={<Adminview/>}/>
      <Route path="/customerview" element={<Customerview/>}/>
      <Route path="/moviepage" element={<Moviepage/>}/>
      <Route path="/bookticket" element={<Bookticket/>}/>


     
     </Routes>
     </BrowserRouter>
      
    </div>
  );
}

export default App;
