//import { useState } from "react"
import axios from "axios";
import {useEffect,useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import Start from "./start";
import Question from "./question";
import End from "./end";
const Question1=()=>{
    const [step,setStep]=useState(1);
    const [activeQuestion,setActiveQuestion]=useState(0);
    const [answer,setAnswer]=useState([]);
   const[q,setQ]=useState([]);
const getQuestion=async()=>{
        const response=await axios.get(`http://localhost:3333/question/quizdto/${params.id}`);
        return response.data;
    }
    useEffect(()=>{
        getQuestion().then(data=>{
            console.log(data);
            setQ(data);
        
          });
        },[]);
        const params=useParams();
    const startHandle=()=>{
        setStep(2);
        // if(intervalRef.current)clearInterval(intervalRef.current);
        // clearTimer(getDeadlineTime())
      }
      console.log(q);
      const endHandle=()=>{
        setStep(4);
      }
      console.log(params);
      return (
        <div className="App">
         {step===1 && <Start quizStart={startHandle}/>}
         
         {step===2 &&  <Question 
        //data={q.data[activeQuestion]}
         onAnswerUpdate={setAnswer}
         //numberOfQuestion={question.data.length}
          activeQuestion={activeQuestion}
          onSetActiveQuestion={setActiveQuestion}
          onSetStep={setStep}/>
        }
        {step===3 && <End quizEnd={endHandle}/>}
        </div>
      );

}
export default Question1;