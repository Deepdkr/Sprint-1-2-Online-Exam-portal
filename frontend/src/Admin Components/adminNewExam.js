
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container ,Paper,Button, Input} from '@material-ui/core';

const examStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
     
    },
  },
}));

export default function AddExam() {
    const examStyle={padding:'50px 20px', width:600,margin:"20px auto"}
   
    const[examId,setExamId]=useState('')
    const[examName,setName]=useState('')
   
    const[exam,setExam]=useState([])
    
     const classes = examStyles();

  const handleClick=(e)=>{
    e.preventDefault()
    const exam={examId,examName}
    console.log(exam)
    fetch("http://localhost:8080/addexam",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(exam)

  }).then(()=>{
    console.log(alert("New Exam added"))
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
            <h1> Add Exam</h1>
                <br/>
      
                <fieldset>
                <Input id="outlined-basic" placeholder="Exam Id" variant="outlined" fullWidth
            value={examId}
            onChange={(e)=>setExamId(e.target.value)}
            required/>
                </fieldset>

                <fieldset>
                <Input id="outlined-basic"  placeholder="Exam"variant="outlined" fullWidth
            value={examName}
            onChange={(e)=>setName(e.target.value)}
           required/>
                </fieldset>

               
               
                <fieldset>
                  <button name="submit" type="submit" id="contact-submit" data-submit="...Sending" >
                   ADD
                    </button>
                </fieldset> 
                
              </form>
            </div>
         
        );
    }