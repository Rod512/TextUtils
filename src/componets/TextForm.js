import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log('upper case was click' + text)
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleOnChange = (event)=>{
        console.log('on change')
        setText(event.target.value)
    }

    const [text, setText] = useState('Enter text here')


  return (
    <div>
        <div>
            <div className="mb-3">
            <h1>{props.heading}</h1>
            <textarea className="form-control" value={text} id="myBox" rows="8" onChange ={handleOnChange}></textarea>
            </div>
            <button className='btn btn-primary' onClick={handleUpClick}>convert to uppercase</button>
        </div>
    </div>
  )
}
