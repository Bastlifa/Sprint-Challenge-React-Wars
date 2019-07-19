import React, {useState, useEffect} from 'react';
import axios from 'axios'
import CharCards from './components/CharCards/CharCards'
import {DarkBody} from './components/StyledComps'


import './App.css';

const App = () => {

  const [swChars, setSWChars] = useState('')
  
  useEffect( _ =>
    {
      if (swChars === '')
      {
        console.log('stop hitting their server')

        axios.get(`https://henry-mock-swapi.herokuapp.com/api`)
        .then(response => 
        {
          setSWChars(response.data.results)
        })
        .catch(err => console.log(err))
      }
    }, [swChars])
    
  return (
    <div className="App">
      <h1>React Wars</h1>
      <DarkBody>
        <CharCards swChars={swChars} />
      </DarkBody>
    </div>
  );
}

export default App;
