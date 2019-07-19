import React from 'react'
import CharCard from '../CharCard/CharCard'
import {Grid} from '../StyledComps'
export default function CharCards({swChars})
{
    console.log("swChars[0]", swChars[0]);
    return swChars ?  (

        <Grid>
            {swChars.map((swChar, index) => <CharCard key={index} charObj={swChar} />)}
        </Grid>
    ) : <div></div>
}