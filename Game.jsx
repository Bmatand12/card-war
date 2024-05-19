import React, { useState } from 'react'
import Card from './Card'

export default function Game({
                  computerDeck,
                  playerDeck,
                  computerPoints,
                  setComputerPoints,
                  playerPoints,
                  setPlayerPoints,
                  setFlagPage,
                  player,
                  setPlayer
}) {

    const [index,setIndex]=useState(0)

    function compareValues(){

        
        if(computerDeck[index]>playerDeck[index])
        {
            setComputerPoints((pervState)=>pervState+1)
        }
        else if(computerDeck[index]<playerDeck[index])
        {
            setPlayerPoints((pervState)=>pervState+1)
        }

        setIndex(index+1);

        if(index===25)
        {
            let colonedPlayer=structuredClone(player)
            // let updatePlayer={...player}
        
        if(computerPoints>playerPoints)
        {
            colonedPlayer.lost++;
            // updatePlayer.lost++;
        }
        else if(computerPoints<playerPoints)
        {
            colonedPlayer.win++;
            // updatePlayer.win++;
        }
        setFlagPage(2)
        setPlayer(colonedPlayer)
        // setPlayer(updatePlayer)
    }
}


  return (
    <div>
        <h1 style={{textAlign:'left'}}>Computer</h1>
        <Card cardValue={computerDeck[index]}/>
        <br/>
        <hr/>
        <br/>
        <Card cardValue={playerDeck[index]}/>
        <h1 style={{textAlign:'right'}}>{player.fullName}</h1>
        <button onClick={compareValues}>Next</button>
    </div>
  )
}
