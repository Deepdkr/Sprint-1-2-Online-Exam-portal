import { render, screen, fireEvent } from '@testing-library/react';
import Exam from './exam'

test("welcome team component",()=>{
    render(<Exam />)
    fireEvent.click(screen.getByText("View Exam Name"))
    screen.findAllByAltText("Json").then((e)=>{
        console.log(e)
        expect(e).toBeInTheDocument()
    })
    fireEvent.click(screen.getByText("View Exam Id"))
    screen.findAllByAltText("73").then((e)=>{
        console.log(e)
        expect(e).toBeInTheDocument()
    })
   

  
})