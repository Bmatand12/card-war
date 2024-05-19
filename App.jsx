import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Game from './components/Game'
import Score from './components/Score'
import Home from './components/Home'

function App() {

  const [player,setPlayer]=useState([{}])
  const [playerDeck,setPlayerDeck]=useState([])
  const [computerDeck,setComputerDeck]=useState([])
  const [playerPoints,setPlayerPoints]=useState(0)
  const [computerPoints,setComputerPoints]=useState(0)
  const [flagPage,setFlagPage]=useState(0)
 
  
  function tryAgain(){
    setComputerPoints(0)
    setPlayerPoints(0)
    setFlagPage(1)
    createDeck()
  }

function validName(name){
  if(name.length > 0)
  {
    setPlayer({fullName:name, win:0,lost:0})
    createDeck()
    setFlagPage(1);
  }
}

function showPages(){
  if(flagPage===0)
  {
    return <Home validName={validName}/>
  }
  if(flagPage===1)
  {
    return <Game computerDeck={computerDeck}
                  playerDeck={playerDeck}
                  computerPoints={computerPoints}
                  setComputerPoints={setComputerPoints}
                  playerPoints={playerPoints}
                  setPlayerPoints={setPlayerPoints}
                  setFlagPage={setFlagPage}
                  player={player}
                  setPlayer={setPlayer}/>
  }
  if(flagPage===2)
  {
    return <Score 
           player={player}
           computerPoints={computerPoints}
           playerPoints={playerPoints}
           tryAgain={tryAgain}/>
  }
}

  function createDeck(){

    let cartDeck=[];
    for(let i=1;i<=13;i++)
    {
      for(let j=0;j<4;j++)
      {
        cartDeck.push(i);
      }
    }

    let rndIndex;
    let compDeck=[];
    let playDeck=[];
    for(let i=0;i<26;i++)
    {
      rndIndex=Math.floor(Math.random()*cartDeck.length)
      playDeck.push(cartDeck[rndIndex])
      cartDeck.splice(rndIndex,1)

      rndIndex=Math.floor(Math.random()*cartDeck.length)
      compDeck.push(cartDeck[rndIndex])
      cartDeck.splice(rndIndex,1)
    }

    setComputerDeck([...compDeck]);
    setPlayerDeck([...playDeck]);
  }
  return(
  <>
  <div>
    {showPages()}
  </div>
  </>
  )
}

export default App
