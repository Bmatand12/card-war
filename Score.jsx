import React from 'react'

export default function Score({computerPoints,playerPoints,player,tryAgain}) {

    function checkWinner(){
        if(computerPoints<playerPoints)
        {
            return<h2>You Win!</h2>
        }
        else if(computerPoints>playerPoints)
        {
            return<h2>You Lose!</h2>
        }
        else{
            return<h2>It's A Tie!</h2>
        }
    }
  return (
    <div>
        {checkWinner()}
        <h2>Win's: {player.win} / Loss: {player.lost}</h2>
        <button onClick={tryAgain}>Try Again?</button>
    </div>
  )
}
