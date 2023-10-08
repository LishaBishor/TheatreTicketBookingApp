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
    // Frontend form validation
    const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;                        ///^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const indianPhoneRegex = /^(\+91)?[6-9]\d{9}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    const [emailError, setEmailError] = useState('');
    const [phoneNoError, setphoneNoError] = useState('');
    const [passwordError, setpasswordError] = useState('');
    
    

  const inputHandler=(e)=>{
    
    setInputs({
        ...inputs,[e.target.name]:e.target.value
       })
    console.log(inputs)
}

const submitHandler=()=>{
   // Front End Form Validation ;
   console.log("clicked",inputs)
   // empty inputs
   if(inputs.emailid==null ||inputs.mobile==null || inputs.username==null || inputs.password==null){
       setTimeout(() => {
           const messageDisplay = 'Please fill in all the fields.';
           setMessage(messageDisplay);
       }, 1000);
       setTimeout(() => {
           const messageDisplay = '';
           setMessage(messageDisplay);
       }, 5000);
           
   }
  //Checking emailid
 else  if (!emailRegex.test(inputs.emailid)) {
            setEmailError('Please enter a valid email address.');
            setTimeout(() => {
            setEmailError("");
          }, 5000);
       }
   // Checking Phone number 
     else if(!indianPhoneRegex.test(inputs.mobile)){
            setphoneNoError('Please enter a valid phone number.');
            setTimeout(() => {
            setphoneNoError("");
          }, 5000);
      
       }   
   // Checking Password 
     else if (!passwordRegex.test(inputs.password)) {
            setpasswordError('Password should  be atleast 6 characters with an uppercase, a lower case, a letter, a digit and a special character  ');
            setTimeout(() => {
            setpasswordError("");
           }, 5000);
    
       }
       else{
        //After form validation
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
              <input type='text' className='form-control' name="emailid" onChange={inputHandler}  />
              <div style={{color:'red'}}>{emailError}</div>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6">
              <label htmlFor=''className='form-label'>MobileNumber</label>  
              <input type='text' className='form-control' name="mobile" onChange={inputHandler} />
              <div style={{color:'red'}}>{phoneNoError}</div>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6">
              <label htmlFor=''className='form-label'>Username</label>  
              <input type='text' className='form-control'name="username" onChange={inputHandler}  />
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6">
              <label htmlFor=''className='form-label'>Password</label>  
              <input type='password' className='form-control' name="password" onChange={inputHandler}/>
              <div style={{color:'red'}}>{passwordError}</div>
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