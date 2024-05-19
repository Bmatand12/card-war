import React from 'react'

export default function Card({cardValue}) {
  return (
    <div style={{
        backgroundColor:'lightgray',
        margin:'auto',
        border:'1px solid lightgray',
        width:'200px',
        height:'200px'
    
    }}>
        <h1>{cardValue}</h1>
    </div>
  )
}
