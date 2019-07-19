import React, {useState, useEffect} from 'react';
import axios from 'axios'
import CharCards from './components/CharCards/CharCards'
import {DarkBody, YellowH1} from './components/StyledComps'
import Pagination from './components/Pagination/Pagination'

import './App.css';

const App = () => {

  const [swChars, setSWChars] = useState([])

  // const [curPage, setCurPage] = useState('https://henry-mock-swapi.herokuapp.com/api/?page=1')
  const [curPage, setCurPage] = useState('https://swapi.co/api/people/?page=1')

  useEffect( _ =>
    {
        console.log('stop hitting their server')
        axios.get(curPage)
        .then(response => 
        {
          setSWChars(response.data.results)
          
        })
        .catch(err => console.log(err))
    }, [curPage])
    
  return (
    <div className="App">
      <YellowH1>React Wars</YellowH1>
      <Pagination setCurPage={setCurPage} curPage={curPage} />
      <DarkBody>
        <CharCards swChars={swChars} curPage={curPage} />
      </DarkBody>
    </div>
  );
}

export default App;
