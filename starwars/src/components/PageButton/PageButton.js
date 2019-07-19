import React from 'react'
import {Button} from '../StyledComps'

export default function PageButton(props)
{
    const {buttonText, setCurPage, curPage, setPageUpdate} = props
    let handleClick = _ => 
    {
        setCurPage(`https://henry-mock-swapi.herokuapp.com/api/?page=${buttonText}`)
        setPageUpdate(true)
    } 

    return(
        <Button onClick={handleClick}>{buttonText}</Button>
    )
}