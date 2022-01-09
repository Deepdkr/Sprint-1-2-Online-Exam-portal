
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Input} from '@material-ui/core';

const questionStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
     
    },
  },
}));

export default function AddQuestion() {
    const questionStyle={padding:'50px 20px', width:600,margin:"20px auto"}
   
    const[questionId,setQuestionId]=useState('')
    const[content,setContent]=useState('')
    const[answer,setAnswer]=useState('')
    const[givenAnswer,setgivenAnswer]=useState('')
    const[option1,setOption1]=useState('')
    const[option2,setOption2]=useState('')
    const[option3,setOption3]=useState('')
    const[option4,setOption4]=useState('')
    const[quizid,setQuizId]=useState('')
    const[question,setQuestion]=useState([])
    
     const classes = questionStyles();

  const handleClick=(e)=>{
    e.preventDefault()
    const question={questionId,content,answer,givenAnswer,option1,option2,option3,option4,quizid}
    console.log(question)
    fetch("http://localhost:8080/question/",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(question)

  }).then(()=>{
    console.log(alert("New Question added"))
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
            <h1> Add Question</h1>
                <br/>
      
                <fieldset>
                <Input id="outlined-basic" placeholder="Question Id" variant="outlined" fullWidth
            value={questionId}
            onChange={(e)=>setQuestionId(e.target.value)}
            required/>
                </fieldset>

                <fieldset>
                <Input id="outlined-basic"  placeholder="Content"variant="outlined" fullWidth
            value={content}
            onChange={(e)=>setContent(e.target.value)}
           required/>
                </fieldset>

                <fieldset>
                <Input id="outlined-basic"  placeholder="Answer"variant="outlined" fullWidth
            value={answer}
            onChange={(e)=>setAnswer(e.target.value)}
           required/>
                </fieldset>

               

                <fieldset>
                <Input id="outlined-basic"  placeholder="Option1"variant="outlined" fullWidth
            value={option1}
            onChange={(e)=>setOption1(e.target.value)}
           required/>
                </fieldset>

                <fieldset>
                <Input id="outlined-basic"  placeholder="Option2"variant="outlined" fullWidth
            value={option2}
            onChange={(e)=>setOption2(e.target.value)}
           required/>
                </fieldset>

                <fieldset>
                <Input id="outlined-basic"  placeholder="Option3"variant="outlined" fullWidth
            value={option3}
            onChange={(e)=>setOption3(e.target.value)}
           required/>
                </fieldset>
               
                <fieldset>
                <Input id="outlined-basic"  placeholder="Option4"variant="outlined" fullWidth
            value={option4}
            onChange={(e)=>setOption4(e.target.value)}
           required/>
                </fieldset>

                <fieldset>
                <Input id="outlined-basic"  placeholder="Exam Id"variant="outlined" fullWidth
            value={quizid}
            onChange={(e)=>setQuizId(e.target.value)}
           required/>
                </fieldset>

                
                <fieldset>
                  <button name="submit" type="submit" id="contact-submit" data-submit="...Sending" >
                   Add
                    </button>
                </fieldset> 
                

                
              </form>
            </div>
         
        );
    }