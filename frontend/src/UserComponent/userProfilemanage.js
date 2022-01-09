
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container ,Paper,Button, Input} from '@material-ui/core';

const userprofile = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
     
    },
  },
}));

export default function Profile() {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
   
    
    const[userEmailId,setEmail]=useState('')
    const[userPsw,setPassword]=useState('')
    const[user,setUser]=useState([])
    
     const classes = userprofile();

  const handleClick=(e)=>{
    e.preventDefault()
    const user={userEmailId,userPsw}
    console.log(user)
    fetch("http://localhost:8080/get",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(user)

  }).then(()=>{
    console.log("New user added")
  })
}

useEffect(()=>{
  fetch("http://localhost:8080/getAllUsers")
  .then(res=>res.json())
  .then((result)=>{
    setUser(result);
  }
)
},[])
  return (

    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"#7FFFD4"}}><u>User Login</u></h1>

    <form className={classes.root} noValidate autoComplete="off">
    
     
     User Email
       <Input id="outlined-basic" lable="Email" variant="outlined" fullWidth
      value={userEmailId}
      onChange={(e)=>setEmail(e.target.value)}
      />
      User Password
       <Input id="outlined-basic" label="password" variant="outlined" fullWidth
      value={userPsw}
      onChange={(e)=>setPassword(e.target.value)}
      />
    
      <Button variant="contained" color="secondary" onClick={handleClick}>
  Login
</Button>
    </form>
   
    </Paper>

    </Container>
  );
}