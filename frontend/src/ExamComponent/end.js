import React from 'react';
import Question  from './question';
import { useNavigate } from 'react-router-dom';
const End=({quizEnd})=>{
  const navigate=useNavigate();
    return (
        <div className="card">
        
        <div className="card-content">
            <div className="content">
          <h1>You reached end of the test</h1>
          <button className="btn btn-success " onClick={() => navigate("/userDashboard")}>Submit</button>
        </div>
      </div>
      </div>
    )
}
export default End;