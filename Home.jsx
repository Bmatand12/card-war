import React, {useState} from "react"

export default function Home({validName}) {
    const [name,setName]=useState('')

    function handelNameInput(){
        validName(name)
    }
  return (
    <div>
        <h1>Redy For War?</h1>
        <hr/>
        <input type='text' placeholder='Enter Your Name' onChange={e=>{setName(e.target.value)}}/>
        <button onClick={handelNameInput}>Start</button>
    </div>
  )
}
