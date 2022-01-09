
import { useState } from "react"

function Exam()
{
    const [examName,setExamName] = useState("")
    const [examId,setExamId] = useState("")
   

    return <div> Exam
    <button onClick={()=>{
        setExamName("Online Exam")
    }}> View Exam Name </button>
    {examName}

    <button onClick={()=>{
        setExamId("111")
    }}> View Exam Id </button>
    {examId}

    
    </div>
}
export default Exam
