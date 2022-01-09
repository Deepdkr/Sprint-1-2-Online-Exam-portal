import React from "react";
import axios from "axios";
import {useState,useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";

const ViewQues=()=>
{
    const[exam,setExam]=useState([]);
    const getExam=async()=>{
        const response=await axios.get("http://localhost:8080/question/questionlist");
        return response;
    }
    useEffect(()=>{
        getExam().then(data=>{
            console.log(data);
            setExam(data.data);
        
          });
        },[]);
        const navigate=useNavigate();
    return(
         <>
      
        <h1>Exam</h1>
        <table className="table" id="customers">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Question Id</th>
            <th scope="col">Content</th>
            <th scope="col">Answer</th>
            
            <th scope="col">Option1</th>
            <th scope="col">option2</th>
            <th scope="col">Option3</th>
            <th scope="col">Option4</th>
         
          </tr>
        </thead>
        <tbody>
            { exam.slice(0, 10).map((exam) => (
            <tr key={exam.questionId}>
              <th scope="row">{exam.quesId}</th>
            
              <td>{exam.content}</td>
              <td>{exam.answer}</td>
            
              <td>{exam.option1}</td>
              <td>{exam.option2}</td>
              <td>{exam.option3}</td>
              <td>{exam.option4}</td>
              
    
   
             
             
              </tr>
          ))}
            </tbody>
      </table>
       
    
    </>
)
}
export default ViewQues;