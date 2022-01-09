import { render, screen, fireEvent } from '@testing-library/react';

import Registration from './Registration';

test("welcome team component",()=>{
    render(<Registration />)
    fireEvent.click(screen.getByText("View User Name"))
    screen.findAllByAltText("simran").then((e)=>{
        console.log(e)
        expect(e).toBeInTheDocument()
    })
    fireEvent.click(screen.getByText("View User Id"))
    screen.findAllByAltText("1").then((e)=>{
        console.log(e)
        expect(e).toBeInTheDocument()
    })
    fireEvent.click(screen.getByText("View User Email"))
    screen.findAllByAltText("simran@gamil.com").then((e)=>{
        console.log(e)
        expect(e).toBeInTheDocument()
    })
    fireEvent.click(screen.getByText("View User Password"))
    screen.findAllByAltText("111111").then((e)=>{
        console.log(e)
        expect(e).toBeInTheDocument()
    })
   

  
})