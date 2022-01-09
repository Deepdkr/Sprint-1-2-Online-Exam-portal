import { CenterFocusStrongTwoTone } from "@mui/icons-material";
import axios from "axios";
import {useState,useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import './viewExam.css'
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
        <h1>Exams</h1>
        <table className="table" id="customers">
        <thead className="thead-dark">
          <tr>
           
            <th scope="col">Exam Id</th>
            <th scope="col"> Exam Name</th>
            <th scope="col">Delete Exam</th>
            
           
           
          </tr>
        </thead>
        <tbody>
            { exam.slice(0, 10).map((exam) => (
            <tr key={exam.examId}>
              <th id="wid" scope="row">{exam.examId}</th>
              
              
              <td >{exam.examName}</td>
              
              <td id="wid">
              <button id="but" className="btn btn-danger btn-sm" onClick={()=>navigate(`/examlist8/${exam.examId}`)}>
                  Delete
                </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               
                </td>
             

              </tr>
          ))}
            </tbody>
            
      </table>
       
    
    </>
)
}
export default GetAllExam