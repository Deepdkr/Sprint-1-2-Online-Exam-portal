import axios from "axios";
import {useEffect,useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
const UserQuiz=()=>
{
    const[quiz,setQuiz]=useState([]);
    const getQuiz=async()=>{
        const response=await axios.get("http://localhost:3333/quiz/list");
        return response;
    }
    const params=useParams();
    useEffect(()=>{
        getQuiz().then(data=>{
            console.log(data);
            setQuiz(data.data);
        
          });
        },[]);
        const navigate=useNavigate();

        console.log(params,"params");
        return(
            <div>
                 <h1 className="text-center text-success">List of tests</h1>
        <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
          </tr>
        </thead>
        <tbody>
            { quiz.slice(0, 10).map((quizes) => (
            <tr key={quizes.qId}>
              <td scope="row">{quizes.qId}</td>
              <td>{quizes.title}</td>
              <td>
      <button className="btn btn-success" onClick={()=>navigate(`/toquestion/${quizes.qId}`)}>GoQuiz.</button>
      </td>
      </tr>
            ))}
      </tbody>
      </table>
            </div>
        )
    }
    export default UserQuiz;