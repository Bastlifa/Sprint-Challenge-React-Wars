import React, {useState, useEffect} from 'react';
import axios from 'axios'
import CharCards from './components/CharCards/CharCards'
import {DarkBody} from './components/StyledComps'
import Pagination from './components/Pagination/Pagination'

import './App.css';

const App = () => {

  const [swChars, setSWChars] = useState('')
  const [curPage, setCurPage] = useState('https://henry-mock-swapi.herokuapp.com/api/?page=1')
  const [pageUpdate, setPageUpdate] = useState(false)
  useEffect( _ =>
    {
      console.log(curPage)
      if (swChars === '' || pageUpdate)
      {
        console.log('stop hitting their server')
        setPageUpdate(false);

        axios.get(curPage)
        .then(response => 
        {
          setSWChars(response.data.results)
        })
        .catch(err => console.log(err))
      }
    }, [swChars, curPage, pageUpdate])
    
  return (
    <div className="App">
      <h1>React Wars</h1>
      <Pagination setCurPage={setCurPage} curPage={curPage} setPageUpdate={setPageUpdate}/>
      <DarkBody>
        <CharCards swChars={swChars} />
      </DarkBody>
    </div>
  );
}

export default App;
