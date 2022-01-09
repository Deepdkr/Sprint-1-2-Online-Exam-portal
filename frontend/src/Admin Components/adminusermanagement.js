import axios from "axios";
import {useState,useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import '../ExamComponent/viewExam.css'
const GetAllUsers=()=>
{
    const[question,setQuestion]=useState([]);
    const getQuestion=async()=>{
        const response=await axios.get("http://localhost:8080/userlist");
        return response;
    }
    useEffect(()=>{
        getQuestion().then(data=>{
            console.log(data);
            setQuestion(data.data);
        
          });
        },[]);
        const navigate=useNavigate();
    return(
        <>
        <h1>Users</h1>
        <table className="table" id="customers">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Email</th>
            <th scope="col">Name</th>
            <th scope="col">Delete</th>
           
          </tr>
        </thead>
        <tbody>
            { question.slice(0, 10).map((user) => (
            <tr key={user.userId}>
              <th scope="row">{user.userId}</th>
              
              <td>{user.userEmail}</td>
              <td>{user.userName}</td>
              
              <td id="wid">
              <button id="but" className="btn btn-danger" onClick={()=>navigate(`/user/${user.userName}`)}>
                  Delete
                </button>
                </td>
              
              </tr>
          ))}
            </tbody>
      </table>
       
    
    </>
)
}
export default GetAllUsers