import React from 'react'
import "./Header.css"
import logo from "../Images/massmovies1.png"

const Headermpage = () => {
  return (
    <div>
         <nav class="navbar navbar-expand-lg navbar-dark ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img id="logo1" src={logo} class="d-block w-100" alt="..."/>  </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="/">Home</a>
        <a class="nav-link" href="/bookticket"> BookTicket</a>
        <a class="nav-link" href="/customerview"> Back</a>
        <a class="nav-link" href="/"> Logout</a>
              
      </div>
    </div>
  </div>
</nav>  
    </div>
  )
}

export default Headermpage