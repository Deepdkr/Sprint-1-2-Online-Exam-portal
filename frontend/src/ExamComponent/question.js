import React, { useEffect, useRef, useState } from 'react';
import axios from "axios";
//import {useEffect,useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

const Question=({onAnswerUpdate,numberOfQuestion,activeQuestion,onSetActiveQuestion,onSetStep,timer})=>
{
    const[selected,setSelected]=useState('');
    const[error,setError]=useState('');
    const[q,setQ]=useState([]);
    const radioWrap=useRef();
    const params=useParams();
   // const choices=[data.option1,data.option2,data.option3,data.option4];
    //console.log(choices);
    const getQuestion=async()=>{
        const response=await axios.get(`http://localhost:3333/question/quizdto/${params.id}`);
        return response.data;
    }
    useEffect(()=>{
        getQuestion().then(data=>{
            console.log(data);
            setQ(data);
        
          });
        },[]);
    useEffect(()=>{
        const checkedInput=radioWrap.current.querySelector('input:checked');
        if(checkedInput){
            checkedInput.checked=false;
        }
    },[q])
    const changeHandle=(e)=>{
        setSelected(e.target.value);
        if(error)
        {
            setError('');
        }
    }
    const nextClick=(e)=>{
        if(selected==='')
        {
            return setError('Please select one option!');
        }
        onAnswerUpdate(prevState=>[...prevState,{q:q.question,a:q.selected}]);
        setSelected('');
        setError('');
        onSetStep(3);
    }
    //console.log(choices.data,"a");
    return(
<div>
        {/* <p>{timer}</p> */}
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <h2 className="mb-5"></h2>
                    <div className="control d-flex flex-column" ref={radioWrap}>
                        {
                            q.map((choice)=>(
                               //</div> <label className=" radio badge bg-light text-dark " key={i}><p>{choice.option1}</p>
                                //</label><input type="radio" name="answer" value={choice} onChange={changeHandle} /></>
                                 <div>
                                     <h2>{choice.content}</h2>
                                     {/* <label className="radio badge bg-light text-dart" key={i}><p>{choice.option1}</p> */}
                                     <div><input type="radio" name={choice.quesId} value={choice.option1} onChange={changeHandle}/>{choice.option1}
                                     </div>{/* <</label> */}
                                     {/* <label className="radio badge bg-light text-dart" key={i}><p>{choice.option2}</p> */}
                                     <div><input type="radio" name={choice.quesId} value={choice.option2} onChange={changeHandle}/>{choice.option2}
                                     </div> {/* </label> */}
                                     {/* <label className="radio badge bg-light text-dart" key={i}><p>{choice.option2}</p>
                                     <input type="radio" name="answer" value={choice.option2} onChange={changeHandle}/>{choice.option2}
                                     </label> */}
                                     {/* <label className="radio badge bg-light text-dart" key={i}><p>{choice.option3}</p> */}
                                     <div><input type="radio" name={choice.quesId}  value={choice.option1} onChange={changeHandle}/>{choice.option3}
                                     </div>{/* </label> */}
                                     <div>{/* <label className="radio badge bg-light text-dart" key={i}><p>{choice.option4}</p> */}
                                     <input type="radio" name={choice.quesId} value={choice.option4} onChange={changeHandle}/>{choice.option4}
                                     </div>{/* </label> */}
                                     </div>
                            ))
}



                                 </div>   
                    </div>
                    
                    {error && <div className="text-danger">{error}</div>}
                    <button className="btn btn-primary" onClick={nextClick}>Next</button> 
                </div>
            </div>
        </div>
    )
}
export default Question;