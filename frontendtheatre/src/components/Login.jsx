import React, { useState } from 'react'
import "./Login.css"
import loginimage from "../Images/loginImage.jpg"
import logo from "../Images/massmovies1.png"
import home from "../Images/homeicon.png"
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Login = () => {
    const navigate=useNavigate();
    const[user,setUser]=useState({});
    const [message, setMessage] = useState('');
  const [messageFromBackend, setmessageFromBackend] = useState('');

    const inputHandler=(e)=>{
            setUser({
            ...user,[e.target.name]:e.target.value
           })
        console.log(user)
    }

    const loginHandler=()=>{
      if (user.username == null || user.password == null ) {
        setTimeout(() => {
            const messageFromBackend = 'Please fill in all the fields.';
            setMessage(messageFromBackend);
        }, 500);
        setTimeout(() => {
            window.location.reload(false);
        }, 5000);
    }
    else{
        axios.post("http://localhost:7000/api/login",user)
        .then((response)=>{
          if(response.data.message==="Admin Login suceesfull"){
            const token=response.data.token;
            const userId=response.data.data._id
            const username=response.data.data.username
            console.log(token)
            console.log(userId)
            sessionStorage.setItem("usertoken",token);
            sessionStorage.setItem("userId",userId)
            sessionStorage.setItem("username",username)
            
            navigate('/adminview')
          }
          else{
            if(response.data.message==="Customer Login successful"){
              const token=response.data.token;
              const userId=response.data.data._id
              const username=response.data.data.username
              console.log(token)
              console.log(userId)
              sessionStorage.setItem("usertoken",token);
              sessionStorage.setItem("userId",userId)
              sessionStorage.setItem("username",username)
              navigate('/customerview')
          }
          else{
            const message=response.data.message;
            setMessage(message);
            setTimeout(() => {
                navigate('/');
                }, 2000);
          }
        }
        })
      }
      }
    
  return (
    <div>
       <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-6 col-md-6 col-lg-6 mr-4">
          <img id="image1" src={loginimage} class="d-block w-100" alt="..."/>
          </div>
          <div id="rightdiv" className="col col-12 col-sm-6 col-md-6 col-lg-6">
            <div className="row g-3">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
           <h2>LOGIN</h2>
            </div>
            <br/>
              
              <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <label htmlFor=''className='form-label'>Username</label>  
              <input type='text' className='form-control'name="username" onChange={inputHandler}  />
              </div>
              <br/>
              <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <label htmlFor=''className='form-label'>Password</label>  
              <input type='password' className='form-control' name="password" onChange={inputHandler}/>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              
              </div>
                            
              <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                <button id="button" className="btn btn-success" onClick={loginHandler}>Login</button>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6">
               <a href="/"><img id="home" src={home} alt="" /> Home</a>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6">
              <div style={{color:'green'}}>{messageFromBackend}</div>
                        <div style={{color:'red'}}>{message}</div>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6">
              <div style={{color:'white'}}>NewUser?</div>
                        <div style={{color:'blue'}}><a href='/signup'>SignUp</a></div>
              </div>
             
              
            </div>

          </div>
        </div>
      </div>
 
    </div>
  )
}

export default Login