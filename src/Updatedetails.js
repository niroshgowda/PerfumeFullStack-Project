import React, { useEffect, useState } from 'react' 
import { Link, json, useNavigate, useParams } from 'react-router-dom'; 
import './Updatedetails.css'

function Updatedetails(){

const {id} = useParams(); 
const[perfumename,setPerfumename]=useState(''); 
const[cost,setCost]=useState(''); 
const[rating,setRating]=useState(''); 
const[response,setResponse]=useState('');

useEffect(() =>{
   const fetchPerfumeDetails = async () => {
      try{
         const response =await fetch(`http://localhost:8080/getbyid?id=${id}`);
         
         const data= await response.json();
         setPerfumename(data.perfumename);
         setCost(data.cost);
         setRating(data.rating);
         
      }
      catch(error)
      {
         console.error('Error',error);
      }
   };
   fetchPerfumeDetails();
},[id]);

const handlePerfumenameChange = (e) =>{
   setPerfumename(e.target.value);
};
const handleCostChange = (e) =>{
   setCost(e.target.value);
};
const handleRatingChange = (e) =>{
   setRating(e.target.value);
};



const saveOrUpdatePerfume = async(e) => 
{ 
    
    e.preventDefault() 
   
    try
    { 
       const response=await 
       fetch(`http://localhost:8080/putperfume?id=${id}`,
        {
         method:"PUT",
         headers:{"Content-Type" :"application/json"},
         body:JSON.stringify({perfumename,cost,rating})
        });
         if(!response.ok)
         {
            throw new Error('Error:'+response.status);
            
         }
         const data=await response.json();
         setResponse(data);
      }
         catch(error) 
         { 
            console.error(error) 
         }
      
   
}; 

return ( 
     <div id="body"> 
     <img className='vinimg' src='https://images.pexels.com/photos/11567075/pexels-photo-11567075.jpeg?auto=compress&cs=tinysrgb&w=600'></img>
      <div className="signup-form"> 
       <div className="container"> 

        <div className="header92"> 
            <p id='update'><h5>Update Details</h5></p> 
        </div> 
        <div className='rectangle92'>
        <div className='form92'>
        <form onSubmit={saveOrUpdatePerfume}> 

           <div className="inputtt"> 
              <input type="text" placeholder="Perfume Name" value={perfumename}  onChange={handlePerfumenameChange} /> 
            </div>

            <div className="inputtt"> 
               <input type="text" placeholder="Cost" value={cost}  onChange={handleCostChange} /> 
            </div> 

           <div className="inputtt"> 
                <input type="text" placeholder="Rating " value={rating}  onChange={handleRatingChange}/> 
           </div>     
           <br/>
           <br/>
           <br/>
           

           <button className='but92' type="submit">Update</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <button className="ecancelbtn">Cancel</button>
     </form> 
     </div>
     </div>
    </div>
   </div> 
</div> 
) 
} 
export default Updatedetails