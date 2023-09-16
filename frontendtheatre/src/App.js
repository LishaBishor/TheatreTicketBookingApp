import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';


function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
     
     </Routes>
     </BrowserRouter>
      
    </div>
  );
}

export default App;
