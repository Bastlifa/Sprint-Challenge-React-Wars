import React from 'react'
import PageButton from '../PageButton/PageButton'
export default function Pagination(props)
{
    const {setCurPage, curPage, setPageUpdate} = props

    return (
        <div>
            <PageButton 
                setCurPage={setCurPage} 
                curPage={curPage} 
                buttonText={1} 
                setPageUpdate={setPageUpdate}
            />
            <PageButton 
                setCurPage={setCurPage} 
                curPage={curPage} 
                buttonText={2} 
                setPageUpdate={setPageUpdate}
            />
            <PageButton 
                setCurPage={setCurPage}
                curPage={curPage}
                buttonText={3}
                setPageUpdate={setPageUpdate} 
            />
        </div>
    )
}