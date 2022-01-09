import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import AdminDashboard from './admindashboard';

import AdminReg from './Admin Components/adminregistration'
import 'bootstrap/dist/css/bootstrap.min.css';

import AddQuestion from './Admin Components/AddQuestion';
import LOGIN from './UserComponent/userlogin';
import Registration from './UserComponent/userRegistration';


import UserView from './userdashboard'

import Contact from './UserComponent/contactUs'

import Profile from './UserComponent/userProfilemanage'
import TakeTest from './ExamComponent/userTakingTest';

import GetAllUsers from './Admin Components/adminusermanagement';

import AddExam from './Admin Components/adminNewExam';
import ManageExam from './Admin Components/admintestmanagement';

import GetAllExam from './ExamComponent/viewExam';
import ViewQues from './Admin Components/viewQuestions';



ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />} />
    <Route path="/adminregistration" element={<AdminReg/>} />
    <Route path="/admindashboard" element={<AdminDashboard />} />
    <Route path="/adminNewExam" element={<AddExam />} />
    <Route path="/adminusermanagement" element={<GetAllUsers/>} />
    <Route path="/viewQuestions" element={<ViewQues/>}/>
    <Route path="/userlogin" element={<LOGIN/>}/>
    <Route path="/userRegistration" element={<Registration/>}/>
    <Route path="/viewExam" element={<GetAllExam/>}/>
    <Route path="/userdashboard" element={<UserView/>}/>
    <Route path="/userProfilemanage" element={<Profile/>}/>
    <Route path="/contactUs" element={<Contact />}/>
    <Route path="/userTakingTest" element={<TakeTest />}/>
    <Route path="/AddQuestion" element={<AddQuestion/>}/>
    <Route path="/admintestmanagement" element={<ManageExam/>}/>
    
   

    {/* <Route path="/site" element={<next />}/> */}
    <Route path="/timer" element={<submitForm/>}/>
    <Route path="/userInfo" element={<submitForm/>}/>
    {/* <Route path="/start" element={<submitForm/>}/> */}
    
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
