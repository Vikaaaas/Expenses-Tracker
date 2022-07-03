import React from 'react'
import './Card.css'
export default function Card(props) {
    const classes=`card ${props.className}`
    console.log('card')
  return (
    
    <div className={classes}>{props.children}</div>
  )
}
