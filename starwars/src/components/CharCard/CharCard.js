import React, {useState, useEffect} from 'react';
// import axios from 'axios'
import { Divider, Segment } from 'semantic-ui-react';
import { Card, P, Header, HR } from '../StyledComps';

export default function CharCard(props)
{
    const {charObj} = props

    const [charName, setCharName] = useState('')
    const [homeWorld, setHomeWorld] = useState('')
    const [films, setFilms] = useState()
    const [birthYear, setBirthYear] = useState('')
    const [height, setHeight] = useState('')
    const [mass, setMass] = useState('')
    const [hairColor, setHairColor] = useState()
    const [skinColor, setSkinColor] = useState()



    useEffect(_ =>
        {
            if (charObj) 
            {
                setCharName(charObj.name)
                setFilms(charObj.films)
                setHeight(charObj.height)
                setMass(charObj.mass)
                setHairColor(charObj.hair_color)
                setSkinColor(charObj.skin_color)
                // axios.get(charObj.homeworld)
                // .then(response => setHomeWorld(response.data.name))
            }
            else 
            {
                console.log('charName', charName)
            }
        }, [charObj, charName]);

    // const filmsSorted = props.charObj.films.sort((a,b) => a[a.length - 2] - b[b.length - 2]);
    // console.log(filmsSorted);
    return (
        <Card>
            <Header>{charName}</Header>
            <HR />
            <Header>Height, Mass: </Header>
            <P>{`${height} cm. ${mass} kg.`}</P>
            <HR />
            <Header>Hair, Skin: </Header>
            <P>{`${hairColor}, ${skinColor}`}</P>
        </Card>
        
    )
}
