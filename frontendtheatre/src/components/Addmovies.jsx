import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import axios from 'axios';


const Addmovies =(props) => {
    const navigate=useNavigate();
  const [userToken,setUsertoken]=useState(sessionStorage.getItem("usertoken"))
  const[movie,setMovie]=useState(props.data);
  const[castdetails,setCastdetails] =useState([]);
  

  const addCast=()=>{
        setCastdetails([...castdetails,{actorname:movie.actorname,actorimage:movie.actorimage}]);
    movie.actorname=""
    movie.actorimage=""
    console.log(castdetails)
   }

   const cancel=()=>{
    window.location.reload(false)
   }

  const inputHandler=(e)=>{
    const{name,value}=e.target;
    setMovie({
      ...movie,[name]:value
    })
    console.log(movie)
  }

  const addMovie=()=>{
    let data={
        token:userToken,
        moviename:movie.moviename,
        movieimage:movie.movieimage,
        category:movie.category,
        Languages:movie.Languages,
        poster:movie.poster,
        description:movie.description,
        screen:movie.screen,
        timings:movie.timings,
        //cast: movie.cast   
        castdetails:castdetails     
                
    }
    console.log("Add clicked")
   if(props.method==="post"){
       

    axios.post("http://localhost:7000/api/addmovie",data)
    .then((response)=>{
      console.log(response);
      if(response.data.message==="Movie details added sucessfully!!"){
        alert(response.data.message)
        navigate("/adminview");
      }
      else{
        alert(response.data.message)
      }
    })
    .catch(err=>console.log(err))
  }

  if(props.method==="put"){
    console.log("movie",movie)
    axios.put("http://localhost:7000/api/updatemovie/"+movie._id+"/"+userToken,movie)
    .then((response)=>{
        if(response.data.message==="updated"){
            alert(response.data.message)
            window.location.reload(false)
        }else{
            alert('Unable to Update')
        }
    }).catch(err=>console.log(err))
}

}


    let finalJsx1=<div>
    <br/>
    <div className="container">
       <div className="row">
           <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
               <div className="row g-3">
                   
                   <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                   <label htmlFor=''className='form-label'>MovieName</label>  
                   <input type='text' className='form-control'  name='moviename' value={movie.moviename} onChange={inputHandler}/>
                   </div>
                   <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                   <label htmlFor=''className='form-label'>MovieImageUrl</label>  
                   <input type='text' className='form-control' name='movieimage' value={movie.movieimage} onChange={inputHandler}/>
                   </div>
                   <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                   <label htmlFor=''className='form-label'>Catagory</label>  
                   <input type='text' className='form-control' name='category' value={movie.category} onChange={inputHandler}/>
                   </div>
                   <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                   <label htmlFor=''className='form-label'>Languages</label>  
                   <input type='text' className='form-control' name='Languages' value={movie.Languages} onChange={inputHandler}/>
                   </div>
                   <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                   <label htmlFor=''className='form-label'>PosterUrl</label>  
                   <input type='text' className='form-control' name='poster' value={movie.poster} onChange={inputHandler}/>
                   </div>
                   <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                   <label htmlFor=''className='form-label'>Description</label>  
                   <input type='textarea' name="description" value={movie.description} onChange={inputHandler} id="" cols="30" rows="6" className='form-control'/>
                   </div>
                   <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                   <label htmlFor=''className='form-label'>Screen (sreen1=90seats, screen2=70seats, screen3=50seats)</label>  
                   <input type='text' className='form-control' name='screen' value={movie.screen} onChange={inputHandler}/>
                   </div>
                   <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                   <label htmlFor=''className='form-label'>ShowTimes eg:-"["9AM","12.30PM",...]"</label>  
                   <input type='text' className='form-control' name='timings' value={movie.timings} onChange={inputHandler}/>
                   </div>
                   <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                   <label htmlFor=''className='form-label'> TicketCharge</label>  
                   <input type='text' className='form-control' name='tktcharge'value={movie.tktcharge} onChange={inputHandler} />
                   </div>
                   
               
               {/* 
                   {movie.castdetails.map((val,index)=>{
            return <div key={index} className="col ">
                   <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                   <label htmlFor=''className='form-label'>ActorName{++index}</label>  
                   <input type='text' className='form-control'value={val.actorname}  onChange={inputHandler}/>
                   </div>
                   <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                   <label htmlFor=''className='form-label'>ActorImageUrl{index}</label>  
                   <input type='text' className='form-control'  value={val.actorimage} onChange={inputHandler}/>
                   </div>
                   </div>
                   })} */}
                   <div style={{background:'gray',color:'black'}}>
                   
                   <h5><b>Add actordetais below:-</b></h5><p>After adding one actor details, click "AddActor" button to add another  </p>
                   
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                   <label htmlFor=''className='form-label'>ActorName</label>  
                   <input type='text' className='form-control' name='actorname' id='actor'  value={movie.actorname} onChange={inputHandler}/>
                   </div>
                   <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                   <label htmlFor=''className='form-label'>ActorImageUrl</label>  
                   <input type='text' className='form-control' name='actorimage'id='image' value={movie.actorimage} onChange={inputHandler}/>
                   </div> 
                   <br/>
                    <div className=" col-12 col-sm-12 col-md-12 col-ig-12">
                   <button className="btn btn-danger"  onClick={addCast} >AddActor</button>
                   </div> 
                   </div>

                   <br/><br/>
                   <div className=" col-12 col-sm-12 col-md-12 col-ig-12">
                   <button className="btn btn-danger" onClick={addMovie} style={{marginLeft:'500px'}}>Submit</button>
                   <button className="btn btn-danger" onClick={cancel} style={{marginLeft:'10px'}} >Cancel</button>
                   </div>
               </div>
           </div>
       </div>
   </div>
</div>

 

    let finalJsx2=<div>
    <br/>
    <div className="container">
       <div className="row">
           <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
               <div className="row g-3">
                   
                   <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                   <label htmlFor=''className='form-label'>MovieName</label>  
                   <input type='text' className='form-control' name='moviename' value={movie.moviename} onChange={inputHandler} disabled/>
                   </div>
                   {/* <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                   <label htmlFor=''className='form-label'>MovieImageUrl</label>  
                   <input type='text' className='form-control' name='movieimage' value={movie.movieimage} onChange={inputHandler}/>
                   </div>
                   <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                   <label htmlFor=''className='form-label'>Catagory</label>  
                   <input type='text' className='form-control' name='category' value={movie.category} onChange={inputHandler}/>
                   </div>
                   <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                   <label htmlFor=''className='form-label'>Languages</label>  
                   <input type='text' className='form-control' name='Languages' value={movie.Languages} onChange={inputHandler}/>
                   </div>
                   <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                   <label htmlFor=''className='form-label'>PosterUrl</label>  
                   <input type='text' className='form-control' name='poster' value={movie.poster} onChange={inputHandler}/>
                   </div>
                   <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                   <label htmlFor=''className='form-label'>Description</label>  
                   <input type='textarea' name="description" value={movie.description} onChange={inputHandler} id="" cols="30" rows="6" className='form-control'/>
                   </div> */}
                   <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                   <label htmlFor=''className='form-label'>Screen</label>  
                   <input type='text' className='form-control' name='screen' value={movie.screen} onChange={inputHandler} disabled/>
                   </div>
                   <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                   <label htmlFor=''className='form-label'  style={{color:'white'}}>TicketCharge (Edit)</label>  
                   <input type='text' className='form-control' name='tktcharge' value={movie.tktcharge} onChange={inputHandler}/>
                   </div>
                   <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                   <label htmlFor=''className='form-label'  style={{color:'white'}}>ShowTimes eg:-"["9AM","12.30PM",...]" (Edit)</label>  
                   <input type='text' className='form-control' name='timings' value={movie.timings} onChange={inputHandler}/>
                   </div>
               
               
                   {movie.castdetails.map((val,index)=>{
            return <div key={index} className="col ">
                   <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                   <label htmlFor=''className='form-label'>ActorName{++index}</label>  
                   <input type='text' className='form-control'value={val.actorname}  onChange={inputHandler}/>
                   </div>
                   <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                   <label htmlFor=''className='form-label'>ActorImageUrl{index}</label>  
                   <input type='text' className='form-control'  value={val.actorimage} onChange={inputHandler}/>
                   </div>
                   </div>
                   })} 
                   {/* <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                   <label htmlFor=''className='form-label'>ActorName2</label>  
                   <input type='text' className='form-control' name='actorname2'  value={movie.castdetails[1]} onChange={inputHandler}/>
                   </div>
                   <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                   <label htmlFor=''className='form-label'>ActorImageUrl2</label>  
                   <input type='text' className='form-control' name='actorimage2' value={movie.castdetails[1]} onChange={inputHandler}/>
                   </div> */}
                   {/* <div className=" col-12 col-sm-6 col-md-6 col-ig-6">
                   <button className="btn btn-danger" onClick={addCast} >AddActor</button>
                   </div> */}
                   <br/><br/>
                   <div className=" col-12 col-sm-12 col-md-12 col-ig-12">
                   <button className="btn btn-danger" onClick={addMovie} style={{marginLeft:'500px'}}>Submit</button>
                   
                   </div>
               </div>
           </div>
       </div>
   </div>
</div>

if(props.method==="post"){
    return(finalJsx1)
}
if(props.method==="put"){
    return(finalJsx2)
}
//   return (
//     finaljsx
//   )
}

export default Addmovies