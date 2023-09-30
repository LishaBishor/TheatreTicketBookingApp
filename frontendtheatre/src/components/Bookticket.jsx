import React, {useEffect, useState } from 'react'
import "./Bookticket.css"
import Headerbook from './Headerbook'

const Bookticket = () => {
  // const container=document.querySelector('.container');
  // const seats=document.querySelectorAll('.row.seat:not(.occupied)');
  const[seatno,setSeatno]=useState('');
  const[seats,setSeats]=useState([])
 // const[target,setTarget]=useState([]);
  const[selected,setSelected]=useState([]);
  const[count,setCount]=useState(+0);
 const[sum,setSum]=useState()
  const price=100;
 
   
  // useEffect(()=>{
  //   container.addEventListener('click',(e)=>{
  //     console.log("hello")
  //   })    
    
// },[])

const classchange=()=>{
 // console.log(target.class)
}
const afterpay=(selected)=>{
  selected.forEach(element => {
    const sselected=document.getElementById(element)
    sselected.style.backgroundColor='white';
    sselected.style.cursor='default';
    sselected.style.transform='scale(1)';
    
  });
  alert(`You successfully booked ${count} seats`)
  setCount(+0);
  setSum("");
  setSelected([]);
 // window.location.reload(false);
// const seatss= document.getElementsByClassName('seat.selected');
 //console.log(seatss)
 }
  
 
  


  
const seatdetails=(e,val)=>{
  if(e.target.style.backgroundColor!='blue' && e.target.style.backgroundColor!='white'){
    console.log("val"+val)
    let seat=val;
    setSelected(selected => [...selected,val])
    
    //setCount(selected.length)
    setCount(count+1);
    let c=count
    
     setSum(c*price);
            
    console.log("seat"+seat)
     e.target.style.backgroundColor="blue"
  }
  else if( e.target.style.backgroundColor!="white"){
    e.target.style.backgroundColor="gray"
    let seat=""
    setCount(count-1);
    setSelected((selected)=>{return selected.filter((item)=>item!=val)})
    
    setSum(count*price);
  }
}
  return (
    <div>
        
          <Headerbook/>
          <div class="separator bg-white">
            <div  id='row1'class="row bg-grey" style={{Color:'grey'}}>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" style={{backgroundColor:'grey',color:'grey'}}>111</div>
            </div>
        </div>
{/* movie timings */}
<div class="timecontainer">
  <div class="rowt">
    <div class="col col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
      <button>9am</button><button>12pm</button><button>6.30pm</button><button>9.30pm</button>
    </div>
  </div>
</div>
{/* showcase starts here */}
      <div>
        <ul class="showcase">
          <li>
            <div class="seat"></div>
            <small>N/A</small>
          </li>
          <li>
            <div class="seat selected"></div>
            <small>selected</small>
          </li>
          <li>
            <div class="seat occupied"></div>
            <small>occupied</small>
          </li>
        </ul>
      </div>
      {/* showcase ends here */}
      <div class="container" >
      <div class="screen"></div>
      <p id="screentex">All eyes this way please...</p>
      <br />
        <div class="rows">A
        
          <div class="seat" name='seatA1' id='A1' onClick={event=>seatdetails(event,'A1')}></div> 
          <div class="seat" name='seatA2' id='A2' onClick={event=>seatdetails(event,'A2')}></div>
          <div class="seat" name='seatA3' id='A3' onClick={event=>seatdetails(event,'A3')}></div>
          <div class="seat" id='A4' onClick={event=>seatdetails(event,'A4')}></div>
          <div class="seat" id='A5' onClick={event=>seatdetails(event,'A5')}></div>
          <div class="seat" id='A6' onClick={event=>seatdetails(event,'A6')}></div>
          <div class="seat" id='A7' onClick={event=>seatdetails(event,'A7')}></div>
          <div class="seat" id='A8' onClick={event=>seatdetails(event,'A8')}></div>
          <div class="seat" id='A9' onClick={event=>seatdetails(event,'A9')}></div>
          <div class="seat" id='A10' onClick={event=>seatdetails(event,'A10')}></div>
        </div>
        <div class="rows">B
          <div class="seat" id='B1' onClick={event=>seatdetails(event,'B1')}></div>
          <div class="seat" id='B2' onClick={event=>seatdetails(event,'B2')}></div>
          <div class="seat" id='B3' onClick={event=>seatdetails(event,'B3')}></div>
          <div class="seat" id='B4' onClick={event=>seatdetails(event,'B4')}></div>
          <div class="seat" id='B5' onClick={event=>seatdetails(event,'B5')}></div>
          <div class="seat" id='B6' onClick={event=>seatdetails(event,'B6')}></div>
          <div class="seat" id='B7' onClick={event=>seatdetails(event,'B7')}></div>
          <div class="seat" id='B8' onClick={event=>seatdetails(event,'B8')}></div>
          <div class="seat" id='B9' onClick={event=>seatdetails(event,'B9')}></div>
          <div class="seat" id='B10' onClick={event=>seatdetails(event,'B10')}></div>
        </div>
        <div class="rows">C
          <div class="seat" id='C1' onClick={event=>seatdetails(event,'C1')}></div>
          <div class="seat" id='C2' onClick={event=>seatdetails(event,'C2')}></div>
          <div class="seat" id='C3' onClick={event=>seatdetails(event,'C3')}></div>
          <div class="seat" id='C4' onClick={event=>seatdetails(event,'C4')}></div>
          <div class="seat" id='C5' onClick={event=>seatdetails(event,'C5')}></div>
          <div class="seat" id='C6' onClick={event=>seatdetails(event,'C6')}></div>
          <div class="seat" id='C7' onClick={event=>seatdetails(event,'C7')}></div>
          <div class="seat" id='C8' onClick={event=>seatdetails(event,'C8')}></div>
          <div class="seat" id='C9' onClick={event=>seatdetails(event,'C9')}></div>
          <div class="seat" id='C10' onClick={event=>seatdetails(event,'C10')}></div>
        </div>
        <div class="rows">D
          <div class="seat" id='D1' onClick={event=>seatdetails(event,'D1')}></div>
          <div class="seat" id='D2' onClick={event=>seatdetails(event,'D2')}></div>
          <div class="seat" id='D3' onClick={event=>seatdetails(event,'D3')}></div>
          <div class="seat" id='D4' onClick={event=>seatdetails(event,'D4')}></div>
          <div class="seat" id='D5' onClick={event=>seatdetails(event,'D5')}></div>
          <div class="seat" id='D6' onClick={event=>seatdetails(event,'D6')}></div>
          <div class="seat" id='D7' onClick={event=>seatdetails(event,'D7')}></div>
          <div class="seat" id='D8' onClick={event=>seatdetails(event,'D8')}></div>
          <div class="seat" id='D9' onClick={event=>seatdetails(event,'D9')}></div>
          <div class="seat" id='D10' onClick={event=>seatdetails(event,'D10')}></div>
        </div>
        <div class="rows">E
          <div class="seat" id='E1' onClick={event=>seatdetails(event,'E1')}></div>
          <div class="seat" id='E2' onClick={event=>seatdetails(event,'E2')}></div>
          <div class="seat" id='E3' onClick={event=>seatdetails(event,'E3')}></div>
          <div class="seat" id='E4' onClick={event=>seatdetails(event,'E4')}></div>
          <div class="seat" id='E5' onClick={event=>seatdetails(event,'E5')}></div>
          <div class="seat" id='E6' onClick={event=>seatdetails(event,'E6')}></div>
          <div class="seat" id='E7' onClick={event=>seatdetails(event,'E7')}></div>
          <div class="seat" id='E8' onClick={event=>seatdetails(event,'E8')}></div>
          <div class="seat" id='E9' onClick={event=>seatdetails(event,'E9')}></div>
          <div class="seat" id='E10' onClick={event=>seatdetails(event,'E10')}></div>
        </div>
        <div class="rows">F
          <div class="seat" id='F1' onClick={event=>seatdetails(event,'F1')}></div>
          <div class="seat" id='F2' onClick={event=>seatdetails(event,'F2')}></div>
          <div class="seat" id='F3' onClick={event=>seatdetails(event,'F3')}></div>
          <div class="seat" id='F4' onClick={event=>seatdetails(event,'F4')}></div>
          <div class="seat" id='F5' onClick={event=>seatdetails(event,'F5')}></div>
          <div class="seat" id='F6' onClick={event=>seatdetails(event,'F6')}></div>
          <div class="seat" id='F7' onClick={event=>seatdetails(event,'F7')}></div>
          <div class="seat" id='F8' onClick={event=>seatdetails(event,'F8')}></div>
          <div class="seat" id='F9' onClick={event=>seatdetails(event,'F9')}></div>
          <div class="seat" id='F10' onClick={event=>seatdetails(event,'F10')}></div>
        </div>
       
      </div>
      <br /><div> <button id="paybutton" className="btn btn-danger" style={{backgroundColor:"#1AC25D", borderColor:"#1AC25D"}} onClick={()=>afterpay(selected)}>PayTicketAmount</button></div>
      <br /><br /><br />
      <p  class="text" style={{Color:'white'}}>You  have selected <span>{count}</span> seats <span>{selected}</span> for a price of Rs {sum}/-</p>
      <br />
      
     {seats}
 
       
    </div>
  )
}

export default Bookticket