import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Adminview from './components/Adminview'
import Customerview from './components/Customerview'
import Moviepage from './components/Moviepage';
import Bookticket from './components/Bookticket';
import Addmovies from './components/Addmovies';
import Main from './components/Main';
import Screenthree from './components/Screenthree';
import Canceltkt from './components/Canceltkt';


function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/adminview" element={<Main child={<Adminview/>}/>}/>
      <Route path="/customerview" element={<Customerview/>}/>
      <Route path="/moviepage" element={<Moviepage/>}/>
      <Route path="/bookticket" element={<Bookticket/>}/>
      <Route path="/screen3" element={<Screenthree/>}/>
      <Route path="/cancel" element={<Canceltkt/>}/>
      <Route path="/addmovies" element={<Main child={<Addmovies method='post'data={{ moviename:"",
        movieimage:"",
        category:"",
        Languages:"",
        poster:"",
        description:"",
        screen:"",
        timings:"",
        castdetails:[{actorname: "",actorimage: "" }]  }}/>}/>}/>
      
     
     </Routes>
     </BrowserRouter>
      
    </div>
  );
}

export default App;
