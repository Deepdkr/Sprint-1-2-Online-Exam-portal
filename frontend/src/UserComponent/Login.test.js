
import { render, screen, fireEvent } from '@testing-library/react';

import Login from './Login'

test("welcome team component",()=>{
    render(<Login />)
    fireEvent.click(screen.getByText("View User Name"))
    screen.findAllByAltText("simran").then((e)=>{
        console.log(e)
        expect(e).toBeInTheDocument()
    })
    
    fireEvent.click(screen.getByText("View User Password"))
    screen.findAllByAltText("111111").then((e)=>{
        console.log(e)
        expect(e).toBeInTheDocument()
    })

})