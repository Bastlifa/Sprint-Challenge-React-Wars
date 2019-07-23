import React from 'react'
import PageButton from '../PageButton/PageButton'
export default function Pagination(props)
{
    const {setCurPage, curPage} = props

    return (
        <div>
            <PageButton 
                setCurPage={setCurPage} 
                curPage={curPage} 
                buttonText={1} 
            />
            <PageButton 
                setCurPage={setCurPage} 
                curPage={curPage} 
                buttonText={2} 
            />
            <PageButton 
                setCurPage={setCurPage}
                curPage={curPage}
                buttonText={3}
            />
        </div>
    )
}