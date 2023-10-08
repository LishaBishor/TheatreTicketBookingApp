import React,{ useEffect, useState } from 'react'
import axios from 'axios';
import Headermpage from './Headermpage';
import { useNavigate } from 'react-router-dom';
import Bookticket from './Bookticket';
import "./Moviepage.css"
import usericon from "../Images/usericon.png"
import staricon from "../Images/staricon.png"

import Offcanvas from 'react-bootstrap/Offcanvas';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Moviepage = () => {
    const navigate=useNavigate();
    const[movies,setMovies]=useState([]);
    const[actors,setActors]=useState([])
    const[feedback,setFeedback]=useState([])
    const[userToken,setUsertoken]=useState(sessionStorage.getItem('usertoken'))
    const[movieId,setMovieid]=useState(sessionStorage.getItem("movieId"));
    const[username,setUsername]=useState(sessionStorage.getItem("username"));
    console.log(username)
    const [show, setShow] = useState(false);
    const [data, setData] = useState();
    

    const fetchMoviedata=()=>{
        axios.get("http://localhost:7000/api/findthemovie/"+movieId)
       .then((response)=>{
        console.log("hello")
        console.log(response.data)
       
        // const moviearray=[{id:response.data._id},{}]
       setMovies(response.data);
       setActors(response.data.castdetails)
       setFeedback(response.data.userfeedback)
       sessionStorage.setItem("screen",response.data.screen)
       console.log(movies.moviename)
       console.log(movies.poster)
            
       })
    }

   

    const navigateto=()=>{
    let screen=sessionStorage.getItem('screen')
    console.log(screen)
    if(screen=='screen1')
       {navigate('/bookticket')} 
       else{
        navigate('/screen3')
       }
       
       }
       const handleClose = () => setShow(false);
       const handleShow = () => setShow(true);

       const inputholder = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
               console.log(data);              
      } 
      
      const submitHandler=()=>{
       let feedbackdata={"userfeedback":{
              username:username,
              review:data.review,
              rating:data.rating
       }
      }
      axios.put("http://localhost:7000/api/upreview/"+movieId+"/"+data.rating+"/"+userToken, feedbackdata)
               .then(response => {
                if(response.data.message=="updated")
                 {console.log(response);
                  alert(response.data.message);
                   window.location.reload(false);
                } 
                else{alert(response.data.message)}
               })
    } 
 useEffect(()=>{
    fetchMoviedata();       
    
},[])

  return (
    <div>
        <Headermpage/>
       
        <div class="separator bg-white">
            <div  id='row1'class="row bg-white" style={{Color:'white'}}>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" style={{backgroundColor:'grey',color:'grey'}}>111</div>
            </div>
        </div>
        <div class="tex" >
            <div class='row'>
            <div className=" col-12 col-sm-6 col-md-6 col-ig-6">
                    <h2 style={{color:'white'}}>{movies.moviename}</h2>   
                        <button className="btn btn-danger" onClick={navigateto} >BookTicket</button>
                        </div>               
                        <div className=" col-12 col-sm-6 col-md-6 col-ig-6">
                        <p style={{color:'white'}}>{movies.category}</p>
                        </div> 

            </div>
            </div>
       <div class="container">
            <div class="row">
            <div class=" col col-sm-12 col-md-12 col-lg-12 col-xl-12  text-center">    <div id="carouselExample" class="carousel slide">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={movies.poster} class="d-block w-100" alt="..."/>
                  <div class="text-block">
                    <div class='row'>
                  <div class=" col col-sm-12 col-md-12 col-lg-12 col-xl-12  text-left">
                    <h4>Add Your rating & review</h4>
                    <p>Your ratings matter</p>
                    
                    </div>
                    </div>
                  </div>
                 
                  {/* canvas starts */}
        <Offcanvas show={show} placement={"end"} onHide={handleClose} className="mt-5" style={{backgroundColor:"#58B99C", borderRadius:"0.5rem"}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title  className='text-white' ><h2>{movies.moviename}</h2><br/>Hello <span style={{color:"green"}}>{username}</span>, Write Review & Rate</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <>
          
            <FloatingLabel
              controlId="floatingInput"
              label="Review"
              className="mb-3"
            >
              <Form.Control size="sm" type="textarea" name='review'  onChange={inputholder} placeholder="Name"  style={{backgroundColor:"white"}} />

            </FloatingLabel>
            <Form.Select name='rating'  onChange={inputholder} aria-label="Default select example" style={{backgroundColor:"white"}}>


            <option value=''>Rate the movie {movies.moviename}</option>

            <option value="1" >1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            </Form.Select> <br />
            
            <button className="btn btn-danger"  onClick={submitHandler}>Submit</button>
            </>
            </Offcanvas.Body>
      </Offcanvas>
                  {/* canvas ends */}
    
                  
                </div>
                
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
            
            <div><Button style={{justifyItems:'right',align:'right'}} id='rating' variant="success mt-5 mr-0" onClick={handleShow}>Rate & Review now</Button></div>
            <br/><br/>
            <aside><h3 style={{align:'left',color:'white'}}>About the movie:</h3><p  style={{align:'left',color:'white'}}>{movies.description}</p>
            </aside>
            <br/>
            <div class="tex">
                    <h4>Staring....</h4>                  
            </div>
             <div class="container">
          
             <div class="row row-cols-1 row-cols-md-4 g-4">
                
               {actors.map((value,index)=>{
                 return <div key={index} className="col ">
                
                  <div class="card  bg-dark" style={{borderRadius:100}}>
                    <img id="actorimage" style={{borderRadius:200,height:'100px',width:'100px'}} src={value.actorimage} class="img-fluid rounded-start" alt="..." />
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
        <br/><br/><br/>
        {/* second carousel for reviews */}
        <div><h3 style={{ color: 'white',align:'left'}}>Reviews....</h3></div>
        <div class="row">
            <div class=" col col-sm-12 col-md-12 col-lg-12 col-xl-12  text-center">    <div id="carouselExample" class="carousel slide">
              <div class="carousel-inner">
                <div class="carousel-item active">
                <div class="container">
          
          <div class="row row-cols-1 row-cols-md-4 g-4">
             
            {feedback.map((value,index)=>{
              return <div key={index} className="col ">
             
               <div class="card h-100 ">
               <div class='conatiner'>
                <div class='row'>
                <div class=" col col-sm-6 col-md-6 col-lg-6 col-xl-6  text-left">
                 <img id="usericon" style={{width:50,justifyItems:'left'}} src={usericon} class="img-fluid rounded-start" alt="..." />
                 <h6 >{value.username}</h6>
                 </div>
                 <div class=" col col-sm-6 col-md-6 col-lg-6 col-xl-6  text-right">
                 <img id="staricon"  style={{width:20,justifyItems:'right'}} src={staricon} alt="..."/>
                 <p class="card-text">{value.rating}/10</p>
                 </div>
                 </div>
                 </div>
                 <div class="card-body">
                    
                   <h5 class="card-title" >{value.review}</h5>
                   <p class="card-text">{value.addreview}</p>
                   
                 </div>
               </div>
             </div>
            })}
             </div>
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
            </div> 
            </div>
    </div>
  )
}

export default Moviepage