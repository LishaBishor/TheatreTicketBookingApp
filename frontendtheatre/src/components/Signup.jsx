import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import './Signup.css'
import Image1 from "../Images/theatre4.jpg"
import logo from "../Images/massmovies1.png"
import home from "../Images/homeicon.png"

const Signup = () => {
  const navigate=useNavigate();
  const[inputs,setInputs]=useState({});
  const [message, setMessage] = useState('');
  const [messageFromBackend, setmessageFromBackend] = useState('');

  const inputHandler=(e)=>{
    
    setInputs({
        ...inputs,[e.target.name]:e.target.value
       })
    console.log(inputs)
}

const submitHandler=()=>{
  axios.post("http://localhost:7000/api/customerSignup",inputs)
        .then((response)=>{
            console.log(response)
            if(response.data.message==="Registered Successfully"){
              const messageFromBackend = response.data.message;
              setmessageFromBackend(messageFromBackend);
              setTimeout(() => {
                  navigate('/');
                  }, 2000);
            }
            else{
                alert(response.data.message)
            }
        })
        .catch(err=>console.log(err))
    
}

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-6 col-md-6 col-lg-6 mr-4">
          <img id="image1" src={Image1} class="d-block w-100" alt="..."/>
          </div>
          <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
            <div className="row g-3">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            <img id="image2" src={logo} class="d-block w-100" alt="..."/>
            </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6">
              <label htmlFor=''className='form-label'>Email</label>  
              <input type='text' className='form-control' name="email" onChange={inputHandler}  />
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6">
              <label htmlFor=''className='form-label'>MobileNumber</label>  
              <input type='text' className='form-control' name="mobile" onChange={inputHandler} />
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6">
              <label htmlFor=''className='form-label'>Username</label>  
              <input type='text' className='form-control'name="username" onChange={inputHandler}  />
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6">
              <label htmlFor=''className='form-label'>Password</label>  
              <input type='password' className='form-control' name="password" onChange={inputHandler}/>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                <label htmlFor="" className="form-label">Address</label>
                <textarea  id="" cols="10" rows="5" className="form-control" name="address" onChange={inputHandler}></textarea>
              </div>
              
              <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                <button id="button" className="btn btn-success" onClick={submitHandler}>SignUp</button>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6">
               <a href="/"><img id="home" src={home} alt="" /> Home</a>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6">
              <div style={{color:'green'}}>{messageFromBackend}</div>
                        <div style={{color:'red'}}>{message}</div>
              </div>
              
            </div>

          </div>
        </div>
      </div>

      
    </div>
  )
}

export default Signup