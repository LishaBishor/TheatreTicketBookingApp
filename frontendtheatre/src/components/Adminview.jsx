
import React,{ useEffect, useState } from 'react'
import axios from 'axios';
import "./Customerview.css"
import Headeradm from './Headeradm';
import Addmovies from './Addmovies';
import staricon from "../Images/staricon.png"

const Adminview = () => {

  const[movies,setMovies]=useState([]);
  const[userToken,setUsertoken]=useState(sessionStorage.getItem('usertoken'))
  const[update,setUpdate]=useState(false);
  const[singleValue,setSinglevalue]=useState([])
  const[tickets,setTickets]=useState()
  const[feedback,setFeedback]=useState([])

  const deleteMovie=(id)=>{
    axios.delete("http://localhost:7000/api/deletemovie/"+id+"/"+userToken) 
    .then((response)=>{
     if(response.data.message==="deleted movie details sucessfully"){
         alert(response.data.message);
         window.location.reload(false);
     }
     else{alert(response.data.message);}
    })
    .catch(err=>console.log(err))
 }

 const updateEmp=(val)=>{
  console.log('update clicked',val);
  setUpdate(true)
  setSinglevalue(val)
}
     
 const fetchMoviedata=()=>{
        axios.get("http://localhost:7000/api/viewmovies/"+userToken)
       .then((response)=>{
        console.log(response.data)
       setMovies(response.data);
      // movies.forEach(element=>{
      //   element.userfeedback
      // })
       

       })
    }
 const setId=(id)=>{
    
           sessionStorage.setItem("movieId",id)
          }
    
 useEffect(()=>{
        fetchMoviedata();       
        
    },[])
    let finalJsx=<div>
    {/* <Headeradm/> */}
  <div class="container mt-4" >
 
 <div class="row">
     
     <div class="container">
       
          <div class="row row-cols-1 row-cols-md-4 g-4">
             
            {movies.map((value,index)=>{
              return <div key={index} className="col ">
             
               <div class="card h-100 bg-dark">
                  {/* <a href="/moviepage" onClick={()=>setId(value._id)}><img src={value.movieimage} class="img-fluid rounded-start"  style={{height:'200px'}}  alt="..." /></a> */}
                 <img src={value.movieimage} class="img-fluid rounded-start"   alt="..." />
                 <div class="card-body">
                   <h5 class="card-title" style={{ color: 'white'}}>{value.moviename}</h5>
                   <p class="card-text " style={{ color: 'white'}} >{value.category}</p>
                   <p class="card-text" style={{ color: 'white'}}>{value.Languages}</p>
                   <p class="card-text" style={{ color: 'white'}}>{value.screen}</p>
                   <p class="card-text" style={{ color: 'white'}}>Tickets Sold:{value.tktsold}</p>
                   <img id="staricon"  style={{width:20,justifyItems:'right'}} src={staricon} alt="..."/>
                   <p class="card-text" style={{ color: 'white'}}>{value.avgrating}</p>
                   <p class="card-text"><small class="text-body-secondary"><button className='btn btn-danger'onClick={()=>deleteMovie(value._id)} >Delete</button></small> &nbsp;
                                    <small class="text-body-secondary"><button className='btn btn-primary'onClick={()=>updateEmp(value)}>Update</button></small></p>
                 </div>
               </div>
             </div>
            })}
             </div>
             </div>
             </div>
             </div>

</div>

if(update) finalJsx=<Addmovies method='put'data={singleValue}/>
  return (
     finalJsx  
  )
}

export default Adminview