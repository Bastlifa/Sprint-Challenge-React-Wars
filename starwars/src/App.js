import React, {useState, useEffect} from 'react';
import axios from 'axios'
import CharCards from './components/CharCards/CharCards'
import {DarkBody} from './components/StyledComps'
// import 'semantic-ui-css/semantic.min.css'
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  
  const [swChars, setSWChars] = useState('')
  
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect( _ =>
    {
      console.log('swChars', swChars)
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
