
import { useState } from "react"

function Login()
{
    const [userName,setUserName] = useState("")
    const [password,setUserpassword] = useState("")

    return <div> Exam
    <button onClick={()=>{
        setUserName("simran")
    }}> View User Name </button>
    {userName}

    

    <button onClick={()=>{
        setUserpassword("111111")
    }}> View User Password </button>
    {password}

    </div>
}
export default Login
