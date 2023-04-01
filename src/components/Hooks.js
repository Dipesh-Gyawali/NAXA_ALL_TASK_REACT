import React, { useState } from 'react'

export const Hooks = () => {
    const [diceNumber, setDiceNumber] = useState(5);
    
    const refreshDice = () => {
        const randnum = Math.floor(Math.random()*6)+1;
        setDiceNumber(randnum);
    }
  return (
    <div>
        <center>
            <img className="dice" height={350} width={350} src={require(`../assets/${diceNumber}.png`)} alt="dice pic here" /><br/>
            <button onClick={() => refreshDice()} className="button">Roll</button>
        </center>
    </div>
  )
}
