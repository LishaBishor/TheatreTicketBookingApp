import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Headerbook from './Headerbook';
const Canceltkt = () => {
    const[userToken,setUsertoken]=useState(sessionStorage.getItem('usertoken'))
    const[screen]=useState(sessionStorage.getItem('screen'));
    const[movieId,setMovieid]=useState(sessionStorage.getItem("movieId"));
    const[cancels,setCancels]=useState();
    const[timing,setTiming]=useState();
    const[seats,setSeats]=useState([])

    const inputHandler=(e)=>{
         setCancels({
        ...cancels,[e.target.name]:e.target.value
       })
    // const{name,value}=e.target;
    // setCancel({
    //   ...cancel,[name]:value
    // })
   console.log("cancel"+cancels)
}

const addSeat=()=>{
    setSeats([...seats,cancels.seatstocancel]);
    cancels.seatstocancel=""

console.log("seats"+seats)
}

const tktcancel=()=>{
   setTiming(cancels.timing);
  // setSeats(cancel.seatstocancel)
   console.log(timing,seats)

    let data={"seatstocancel":seats}
    console.log(data);

    axios.put("http://localhost:7000/api/ticketcancel/"+timing+"/"+screen+"/"+movieId+"/"+userToken, data)
    .then(response => {
    //  if(response.data.message=="Booking confirmed")
    //   {console.log(response);
       alert(response.data.message);
       window.location.reload(false);
     //   window.location.reload(false);
    //  } 
    //  else{alert(response.data.message)}
    })
    .catch((error)=>console.log(error))
 setSeats([])
}

  return (
    <div>
         <Headerbook/>
        <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-6 col-md-6 col-lg-6 mr-4">
          <img id="image1" src="" class="d-block w-100" alt="..."/>
          </div>
          <div id="rightdiv" className="col col-12 col-sm-6 col-md-6 col-lg-6">
            <div className="row g-3">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
           <h4>Give You ticket details below for Cancelation</h4>
            </div>
            <br/>
              
              <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <label htmlFor=''className='form-label'> Enter SeatNumber</label>  
              <input type='text' className='form-control'name="seatstocancel"  onChange={inputHandler}  />
              </div>
              <div className=" col-12 col-sm-12 col-md-12 col-ig-12">
                   <button className="btn btn-danger"  onClick={addSeat} >Add to Cancel</button>
                   </div> 
              <br/>
              <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <label htmlFor=''className='form-label'>Show Time</label>  
              <input type='text' className='form-control' name="timing" onChange={inputHandler}/>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              
              </div>
                            
              <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                <button id="button" className="btn btn-success" onClick={tktcancel}>CancelTkt</button>
              </div>
              
             
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Canceltkt