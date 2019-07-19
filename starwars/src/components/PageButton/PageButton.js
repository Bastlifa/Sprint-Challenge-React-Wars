import React from 'react'
import {Button} from '../StyledComps'

export default function PageButton(props)
{
    const {buttonText, setCurPage} = props
    let handleClick = _ => 
    {
        setCurPage(`https://swapi.co/api/people/?page=${buttonText}`)
    } 

    return(
        <Button onClick={handleClick}>{buttonText}</Button>
    )
}