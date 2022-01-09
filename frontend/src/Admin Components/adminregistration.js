import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Container ,Paper,Button, Input} from '@material-ui/core';

const login = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
     
    },
  },
}));

export default function AdminReg() {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
   
    
    const[adminEmailId,setEmail]=useState('')
    const[adminName,setName]=useState('')
    const[adminPsw,setPassword]=useState('')
    const[admin,setAdmin]=useState([])
    
     const classes = login();

  const handleClick=(e)=>{
    e.preventDefault()
    const admin={adminEmailId,adminPsw,adminName}
    console.log(admin)
    fetch("http://localhost:8080/login",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(admin)

  }).then(()=>{
    console.log("New Admin added")
  })
}

useEffect(()=>{
  fetch("http://localhost:8080/getAllUsers")
  .then(res=>res.json())
  .then((result)=>{
    setAdmin(result);
  }
)
},[])
return (
  <div class="container">  
          <form id="contact" action="" method="post" onSubmit={handleClick}>
        <h1> User Registration</h1>
            <br/>
  
            <fieldset>
            <Input id="outlined-basic" placeholder="User Name" variant="outlined" fullWidth
        value={adminName}
        onChange={(e)=>setName(e.target.value)}
        required/>
            </fieldset>

            <fieldset>
            <Input id="outlined-basic" text="email" placeholder="Email"variant="outlined" fullWidth
        value={adminEmailId}
        onChange={(e)=>setEmail(e.target.value)}
       required/>
            </fieldset>

            <fieldset>
            <Input id="outlined-basic"  placeholder=" password"variant="outlined" fullWidth
        value={adminPsw}
        onChange={(e)=>setPassword(e.target.value)}
       required/>
            </fieldset>
           
           
            <fieldset>
              <button name="submit" type="submit" id="contact-submit" data-submit="...Sending" >
                Signup
                </button>
            </fieldset> 
            
          </form>
        </div>
     
    );
}