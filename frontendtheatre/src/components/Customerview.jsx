import React,{ useEffect, useState } from 'react'
import axios from 'axios';
import "./Customerview.css"
import Headercus from './Headercus';


const Customerview = () => {
  const[movies,setMovies]=useState([]);
  const[userToken,setUsertoken]=useState(sessionStorage.getItem('usertoken'))
     
 const fetchMoviedata=()=>{
        axios.get("http://localhost:7000/api/viewmovies/"+userToken)
       .then((response)=>{
        console.log(response.data)
       setMovies(response.data);
       })
    }
 const setId=(id)=>{
    
           sessionStorage.setItem("movieId",id)
          }
    
 useEffect(()=>{
        fetchMoviedata();       
        
    },[])
  return (
 
     <div> <Headercus/>
    <div class="container">
     
    <div class="row">
        
        <div class="container">
          
             <div class="row row-cols-1 row-cols-md-4 g-4">
                
               {movies.map((value,index)=>{
                 return <div key={index} className="col ">
                
                  <div class="card h-100 bg-dark">
                    <a href="/moviepage" onClick={()=>setId(value._id)}><img src={value.movieimage} class="img-fluid rounded-start" alt="..." /></a>
                    <div class="card-body">
                      <h5 class="card-title" style={{ color: 'white'}}>{value.moviename}</h5>
                      <p class="card-text " style={{ color: 'white'}} >{value.category}</p>
                      <p class="card-text" style={{ color: 'white'}}>{value.Languages}</p>
                    </div>
                  </div>
                </div>
               })}
                </div>
                </div>
                </div>
                </div>
                </div>
               
      
    
  )
}

export default Customerview