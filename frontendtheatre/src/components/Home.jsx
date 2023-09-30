import React from 'react'
import "./Home.css"
import carouImage1 from "../Images/massphoto1.png"
import carouImage2 from "../Images/massmovies3.png"
import carouImage3 from "../Images/massmovies4.png"
import Header from './Header'

const Home = () => {
  return (
    <div>
      <Header/>
      <div class="separator bg-white">
            <div  id='row1'class="row bg-white" style={{Color:'white'}}>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" style={{backgroundColor:'grey',color:'grey'}}>111</div>
            </div>
        </div>
<div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={carouImage1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={carouImage2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={carouImage3} class="d-block w-100" alt="..."/>
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

    </div>
  )
}

export default Home