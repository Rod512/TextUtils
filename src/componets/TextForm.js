import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log('upper case was click' + text)
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handlelowClick = ()=>{
        console.log('upper case was click' + text)
        let newText = text.toLowerCase()
        setText(newText)
    }

    const handclearClick = ()=>{
        console.log('upper case was click' + text)
        let newText = ''
        setText(newText)
    }

    const handleOnChange = (event)=>{
        console.log('on change')
        setText(event.target.value)
    }

    const [text, setText] = useState('Enter text here')


  return (
    <>
        <div>
            <div className="mb-3">
            <h1>{props.heading}</h1>
            <textarea className="form-control" value={text} id="myBox" rows="8" onChange ={handleOnChange}></textarea>
            </div>
            <button className='btn btn-primary mx-1' onClick={handleUpClick}>convert to uppercase</button>
            <button className='btn btn-primary mx-1' onClick={handlelowClick}>convert to lowercase</button>
            <button className='btn btn-primary mx-1' onClick={handclearClick}>Clear Text</button>
        </div>

        <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} word and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>

        </div>
    </>
  )
}
