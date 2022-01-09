import React from "react";
import axios from "axios";
import {useState,useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";

const GetAllExam=()=>
{
    const[exam,setExam]=useState([]);
    const getExam=async()=>{
        const response=await axios.get("http://localhost:8080/examlist");
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
        <table className="table">
        <thead className="thead-dark">
          <tr>
            
            <th scope="col">ExamId</th>
            <th scope="col">ExamName</th>
            
          </tr>
        </thead>
        <tbody>
            { exam.slice(0, 10).map((exam) => (
            <tr key={exam.quesId}>
              <th scope="row">{exam.examId}</th>
            
              <td>{exam.examId}</td>
              <td>{exam.examName}</td>
             
             
              </tr>
          ))}
            </tbody>
      </table>
       
    
    </>
)
}
export default GetAllExam;