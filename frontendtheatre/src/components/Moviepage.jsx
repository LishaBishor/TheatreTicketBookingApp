import React,{ useEffect, useState } from 'react'
import axios from 'axios';
import Headermpage from './Headermpage';
import { useNavigate } from 'react-router-dom';
import Bookticket from './Bookticket';

const Moviepage = () => {
    const navigate=useNavigate();
    const[movies,setMovies]=useState([]);
    const[actors,setActors]=useState([])
    const[movieId,setMovieid]=useState(sessionStorage.getItem("movieId"));

    const fetchMoviedata=()=>{
        axios.get("http://localhost:7000/api/findthemovie/"+movieId)
       .then((response)=>{
        console.log(response.data)
       
        // const moviearray=[{id:response.data._id},{}]
       setMovies(response.data);
       setActors(response.data.castdetails)
       console.log(movies.moviename)
       console.log(movies.poster)
       
      
       })
    }
    const navigateto=()=>{
    
        navigate('/bookticket')
       
       }
       
 useEffect(()=>{
    fetchMoviedata();       
    
},[])

  return (
    <div>
        <Headermpage/>
        <div class="text-block">
                    <h2>{movies.moviename}</h2>   <div className=" col-12 col-sm-6 col-md-6 col-ig-6">
                        <button className="btn btn-danger" onClick={navigateto} >BookTicket</button>
                        </div>               
            </div>
       <div class="container">
            <div class="row">
            <div class=" col col-sm-12 col-md-12 col-lg-12 col-xl-12  text-center">    <div id="carouselExample" class="carousel slide">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={movies.poster} class="d-block w-100" alt="..."/>
                  <div class="text-block">
                    <h4 style={{color:'white'}}>Nadhikalil Sundhari Yamuna</h4>
                    
                    </div>
                  
                </div>
                {/* <div class="carousel-item">
                  <img src="./images/idumattu.jpg" class="d-block w-100" alt="..."/>
                  
                </div>
                <div class="carousel-item">
                  <img src="./images/idukky1.jpg" class="d-block w-100" alt="..."/>
                  
                </div> */}
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
              
            </div> 
            <aside><h3 style={{color:'black'}}>About the movie:</h3><p  style={{align:'justify',color:'black'}}>{movies.description}</p>
            </aside>
            <div class="text-block">
                    <h4>Staring....</h4>                  
            </div>
             <div class="container">
          
             <div class="row row-cols-1 row-cols-md-4 g-4">
                
               {actors.map((value,index)=>{
                 return <div key={index} className="col ">
                
                  <div class="card h-100 bg-dark">
                    <img src={value.actorimage} class="img-fluid rounded-start" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title" style={{ color: 'white'}}>{value.actorname}</h5>
                      
                    </div>
                  </div>
                </div>
               })}
                </div>
                </div> 
        </div>
        </div>
        </div>
    </div>
  )
}

export default Moviepage