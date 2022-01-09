
import { useState } from "react"

function Registration()
{
    const [userName,setUserName] = useState("")
    const [userId,setUserId] = useState("")
    const [userEmail,setUserEmail] = useState("")
    const [password,setUserpassword] = useState("")

    return <div> Exam
    <button onClick={()=>{
        setUserName("simran")
    }}> View User Name </button>
    {userName}

    <button onClick={()=>{
        setUserId("1")
    }}> View User Id </button>
    {userId}

    
    <button onClick={()=>{
        setUserEmail("simran@gmail.com")
    }}> View User Email </button>
    {userEmail}

    <button onClick={()=>{
        setUserpassword("111111")
    }}> View User Password </button>
    {password}

    </div>
}
export default Registration
