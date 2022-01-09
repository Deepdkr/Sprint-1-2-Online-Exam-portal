
import './App.css';

import { Link, Outlet } from 'react-router-dom';

import {  Menu } from '@mui/icons-material'
import { AppBar, Toolbar } from '@mui/material'


function App() {
  return (
    
       <div className="App " >
     <h1 className="head">Online Exam Portal</h1>
   
       {/* <nav className='mt-5 p-5'>
      
         <Link to="/AdminDashboard"><button type="button"> Admin Login</button></Link><br/>
         <Link to="/userRegistration"><button type="button"> User Registration</button></Link><br/>
         <Link to="/userlogin"><button type="button"> User Login</button></Link><br/>
        
         
       </nav>
       <center> */}
       <AppBar>

<Toolbar>

    <Menu/>
    <ul class="link">
      
      <li>
      <Link id='s' to="/AdminDashboard">Admin Login</Link>
      </li>
     <li>
     <Link id='s' to="/userRegistration"> User Registration</Link>
     </li>

      <li>
      <Link id='s' to="/userlogin"> User Login</Link>
      </li>
      


    </ul>
</Toolbar>

</AppBar>
      
       <div style={{width:"800px"},{height:"600px"}}>  
                
         <Outlet />
         
       </div>
     
    </div>

   
  );
}


export default App;
