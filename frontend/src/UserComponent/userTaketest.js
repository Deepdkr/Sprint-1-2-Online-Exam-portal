import React from "react";
import { NavLink } from "react-router-dom";

function UserDashboard(){

    return (
        <div className='userdashboard' style={{ backgroundImage: "url(exam.jpg)" }}>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Welcome User</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <NavLink className="nav-item nav-link active" to="/">Home<span className="sr-only"></span></NavLink>
                <NavLink className="nav-item nav-link" to="/toquestion">Start Test</NavLink>
                <button type="button" class="btn btn-dark">Logout</button>
              </div>
            </div>
          </nav>
          
        </div>
    
    
      )
    }
export default UserDashboard;