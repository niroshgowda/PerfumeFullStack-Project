import React, { useEffect, useState } from 'react' 
import { useParams} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import './Getdetails.css'

const Getdetails=()=> { 
const [perfumes, setperfumes] = useState([]) 
const {id} =useParams();
const navigate=useNavigate();
useEffect(() => 
{ 
getAllPerfume(); 
}, []) 

const deletePerfume=async(id)=>
{
   fetch(`http://localhost:8080/deleteperfume?id=${id}`,
   {
    method:'DELETE'
   })
   .then((response)=>
   {
        getAllPerfume();
   })
   .catch(error=>
   {
        console.log(error);
   })
}
const updateid=(id)=>
{
   
   navigate(`/update/${id}`);
}

const getAllPerfume = () => 
{ 
   fetch("http://localhost:8080/getperfume1")
   .then(e=>e.json())
   .then((eve)=>{
   setperfumes(eve);
})
}
 

 
return ( 
   

      <div className="fulltable">
      <img className='niku' src='https://i.pinimg.com/736x/0d/e4/6d/0de46daa4b2a42bbd863782fa63ed3ff.jpg'></img>
      <h2 className='hello'>Perfume Details</h2> 
     
     <table id='gettable'> 
     <thead>
     <tr> 
        <th>PERFUME ID</th> 
        <th>PERFUME NAME</th> 
        <th>COST</th> 
        <th>RATING</th> 
        <th>ACTIONS</th>
    </tr> 
    </thead>
   <tbody>
       {perfumes.map((perfume)=>(
       <tr key={perfume.id}> 
       <td> {perfume.id}</td> 
       <td> {perfume.perfumename}</td> 
       <td> {perfume.cost}</td> 
       <td> {perfume.rating}</td> 
       
       <td>
          <button className="edit" onClick={()=>updateid(perfume.id)}>Update</button> &nbsp;&nbsp;
          <button class="delete" onClick = {() => deletePerfume(perfume.id)}> Delete!</button> &nbsp;&nbsp;
          
      </td> 
    </tr> 
       ))}
       </tbody>
   </table> 
</div> 
)
} 
export default Getdetails;