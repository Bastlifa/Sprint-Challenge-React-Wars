import React from 'react'
import CharCard from '../CharCard/CharCard'
import {Grid} from '../StyledComps'
export default function CharCards({swChars, curPage})
{
    return (
        <Grid>
            {swChars.map((swChar, index) => <CharCard key={index} charObj={swChar} curPage={curPage}/>)}
        </Grid>
    )
    
}