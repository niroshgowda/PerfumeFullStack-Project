import React ,{useState} from 'react'
import './Signup.css'
import { Link, useNavigate} from 'react-router-dom';

function Signup() {
  const navigate=useNavigate("");
  const[firstname,setfirstname]=useState("");
  const[lastname,setlastname]=useState("");
  const[username,setusername]=useState("");
  const[email,setemail]=useState("");
  const[password,setpassword]=useState("");
  const[phoneno,setphoneno]=useState("");

  
  // const handleSubmit=(e)=>{
  //   e.preventDefault();
  //   console.log(userName,password);

  // }
  const sendtodb=(e)=>{
    e.preventDefault()
    const details={firstname,lastname,username,email,phoneno,password}
    if(firstname.length===0||lastname.length===0||username.length===0||email.length===0||phoneno.length===0||password.length===0){
      alert("Enter All fields")
    }
    else{
    fetch("http://localhost:8080/postsu",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(details)
    }
    ).then(()=>{
      console.log("New Detail Added");   
      console.log(JSON.stringify(details));
      console.log(e);
      navigate("/")
    })
  }
}
  return (
    <div className='immg'>
    <div className="img2">
      <div className='rectangle2'></div>
      <div className='head2'>
       <p>Sign up</p>
      </div>
      <div className='form2'>
       <form>

       First_Name &nbsp;&nbsp;: <input type="text200" onChange={(e)=>setfirstname(e.target.value)} value={firstname} placeholder="firstname" /><br/><br/>
      Last_Name  &nbsp;&nbsp; : <input type="text200"  onChange={(e)=>setlastname(e.target.value)} value={lastname} placeholder="laststname" /><br/><br/>

      E-Mail   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : <input type="text300"  onChange={(e)=>setemail(e.target.value)} value={email} placeholder="email" /><br/><br/>
       
       Phone_No   &nbsp;&nbsp;&nbsp;
       : <input type="text300"  onChange={(e)=>setphoneno (e.target.value)} value={phoneno} placeholder="phone no" /><br/><br/>
       Username  &nbsp;&nbsp;&nbsp;&nbsp; : <input type="text300"  onChange={(e)=>setusername(e.target.value)} value={username} placeholder="username" /><br/><br/>
       Password  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <input type="Password400"  onChange={(e)=>setpassword (e.target.value)} value={password} placeholder="password"/><br/><br/>
       
      <br/>
       <Link to="/"><button type="submit" class="but2" onClick={sendtodb}>Create Account</button></Link>
       </form>
      </div>
    </div>
    </div>
  )
}

export default Signup
