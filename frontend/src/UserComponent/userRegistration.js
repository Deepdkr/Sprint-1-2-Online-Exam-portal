
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container ,Paper,Button, Input} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
     
    },
  },
}));

export default function Registration() {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
   
    const[userName,setUserName]=useState('')
    const[userEmail,setEmail]=useState('')
    const[userId,setId]=useState('')
    const[password,setPassword]=useState('')
    const[user,setUser]=useState([])
    
     const classes = useStyles();

  const handleClick=(e)=>{
    e.preventDefault()
    const user={userName,userEmail,password,userId}
    console.log(user)
    fetch("http://localhost:8080/user/registration",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(user)

  }).then(()=>{
    console.log(alert("New user added"))
  })
}

// useEffect(()=>{
//   fetch("http://localhost:8080/getAllUsers")
//   .then(res=>res.json())
//   .then((result)=>{
//     setUser(result);
//   }
// )
// },[])
  

   
    return (
      <div class="container">  
              <form id="contact" action="" method="post" onSubmit={handleClick}>
            <h1> User Registration</h1>
                <br/>
      
                <fieldset>
                <Input id="outlined-basic" placeholder="User Name" variant="outlined" fullWidth
            value={userName}
            onChange={(e)=>setUserName(e.target.value)}
            required/>
                </fieldset>

                <fieldset>
                <Input id="outlined-basic" text="email" placeholder="Email" variant="outlined" fullWidth
            value={userEmail}
            onChange={(e)=>setEmail(e.target.value)}
           required/>
                </fieldset>

                <fieldset>
                <Input id="outlined-basic"  placeholder="User Id"variant="outlined" fullWidth
            value={userId}
            onChange={(e)=>setId(e.target.value)}
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