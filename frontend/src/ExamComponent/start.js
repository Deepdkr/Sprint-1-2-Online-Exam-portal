import React from 'react';
import Question  from './question';
const Start=({quizStart})=>{
    return (
        <div className="card">
        
        <div className="card-content">
            <div className="content">
          <h1>Start quiz</h1>
          <p>good luck!</p>
          <button className="btn btn-success " onClick={quizStart}>Start</button>
        </div>
      </div>
      </div>
    )
}
export default Start;