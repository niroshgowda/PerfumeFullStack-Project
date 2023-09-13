import axios from 'axios';
import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './Details.css';

export default function () 
{
  
  const[perfumename,setPerfumename]=useState('');
  const[cost,setCost]=useState('');
  const[rating,setRating]=useState('');
  const nav=useNavigate()
  
  const store={perfumename,cost,rating}

  const authenticate=(event)=>
  {
    event.preventDefault()
    axios.post("http://localhost:8080/postperfume",store)
    nav("/getdetails")
  }

  return (
    <div>
      <div className='img3'>
        <img src="https://pbs.twimg.com/media/EqDxVaqUUAEhzC4.jpg:large"  alt="per" height="1000px" width="1600px"/>
      </div>
      <div className='rectangle3'></div>
      <div className='head3'>
      <h>Perfume Details</h>
      </div>
      <div className='form3'>
     <form >
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
    
    <label for="fname">perfumename &nbsp;:
    <input type="text4" id="fname" value={perfumename} name="perfumename" placeholder="perfumename...." onChange={(e)=>setPerfumename(e.target.value)}/></label><br/><br/>

    <label for="lname">cost &nbsp;:
    <input type="text4" id="lname" value={cost} name="cost" placeholder="cost...." onChange={(e)=>setCost(e.target.value)}/></label><br/><br/>
    
    <label for="lname">rating &nbsp;:
    <input type="text4" id="lname" value={rating} name="rating" placeholder="rating...." onChange={(e)=>setRating(e.target.value)}/></label><br/><br/>
    
    <button onClick={authenticate} className="log" type='submit'> Submit</button>
   
    </form>
      </div>
      
    </div>
  )
  
}