
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {  Input} from '@material-ui/core';
import {Link,useNavigate} from 'react-router-dom'



const login = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
     
    },
  },
}));

export default function LOGIN({setToken}) {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
   
    
    const navigate=useNavigate()
    const[password,setPassword]=useState('')
    const[userName,setUserName]=useState('')
    const[user,setUser]=useState([])
    
     const classes = login();

  const handleClick=(e)=>{
    e.preventDefault()
    const user={password,userName}
    console.log(user)
    fetch("http://localhost:8080/user/login",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(user)

  }).then((e)=>{
    if(e.status==500){
      console.log(e.status)
      console.log(alert("Login Error!!"))
    }
    else{
      console.log(alert("login Successfull"))
      navigate("/userdashboard")
    }
     
	
   
  })
}

useEffect(()=>{
  fetch("http://localhost:8080/userlist")
  .then(res=>res.json())
  .then((result)=>{
    setUser(result);
  }
)
},[])
  return (
<div class="container">  
        <form id="contact" action="" method="post" onSubmit={handleClick}>
      <h1> User Login </h1>
          <br/>

          <fieldset>
          <Input id="outlined-basic" placeholder="User Name" variant="outlined" fullWidth
      value={userName}
      onChange={(e)=>setUserName(e.target.value)}
      required/>
          </fieldset>
          <fieldset>
          <Input id="outlined-basic"  placeholder="Password"variant="outlined" fullWidth
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
     required/>
          </fieldset>
         
         
         
          <fieldset>
            <button name="submit" type="submit" id="contact-submit" data-submit="...Sending" >
              Login
              </button>
          </fieldset> 
          
        </form>
      </div>
   
  );
}