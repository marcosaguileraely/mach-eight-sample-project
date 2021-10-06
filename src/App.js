import { useState, useEffect } from 'react';
import axios from 'axios'

import './App.css';

const utils = require('./Utils/utils')

function App() {

  const [valueInch, setValueInch] = useState(0)
  const [count, setCount]         = useState(0)
  const [message, setMessage]     = useState("No basketball players found.")
  const [players, setPlayer]      = useState([])
  const [playersFound, setPlayerFound] = useState([])


  useEffect(() => {
    getAllData()
  }, [])

  async function getAllData() {
    return axios.get(`https://mach-eight.uc.r.appspot.com/`)
      .then(res => {
        setPlayer(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const search = () => {
    //console.log(players.values.length)
    //console.log(valueInch)
    const data = utils.findPairs(players.values, valueInch)
    setCount(data.length > 0 ? data.length : 0)
    setMessage(data.length > 0 ? "Player(s) found." : "No matches found.")
    console.log(data.length)
    setPlayerFound(data)
  }

  return (
    <div className="App">
      <header className="App-header">
        <input type="number" onChange={(e) => setValueInch(e.target.value)} />
        <button onClick={search}>Search</button>
        <span id="spacer"/>
        <span id="count">{count}</span> 
        <span id="message">{message}</span> 

      </header>

      <main>
        <div className="container">
          <div>
            {playersFound.map(player => {
              return <div className="box">
                <img src="https://freesvg.org/img/krepsinio-kamuolys.png" width="90" height="90" alt="" loading="lazy" />
                <p>{`${player.first_name} ${player.last_name}`}</p>
                <p>{`${player.h_in} inch (${player.h_meters} meters)`}</p>
              </div>
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
