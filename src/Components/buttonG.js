import React from 'react'
import"../Style/Cart.css"
import {useState} from 'react';

function ButtonG() {
    const [message, setMessage] = useState(true);
  return (
    <div>
    
                            <button type="button" disabled={!message} onClick={event => setMessage(false)}>Add</button><br></br>
                            <button type="button" disabled={message} onClick={event => setMessage(true)}>Remove</button>
                            </div>
                     
  )
}

export default ButtonG
