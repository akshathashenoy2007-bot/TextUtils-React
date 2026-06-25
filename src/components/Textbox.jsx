import React, { useState } from 'react'

export default function Textbox(props) {

  const [text, setText] = useState('');

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const handlespeak = () => {
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
  }

  const handleRemoveSpaces = () => {
    let newText = text.split(" ").filter(word => word !== "").join(" ");
    setText(newText);
  }

  return (
    <div
      className="container"
      style={{
        backgroundColor: props.mode === 'light' ? 'white' : '#212529',
        color: props.mode === 'light' ? 'black' : 'white',
        padding: '20px'
      }}
    >
      <div className="mb-3">
        <label htmlFor="MyBox" className="form-label">
          <h1>Enter your text to analyse</h1>
        </label>

        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="MyBox"
          rows="8"
          style={{
            backgroundColor: props.mode === 'light' ? 'white' : '#343a40',
            color: props.mode === 'light' ? 'black' : 'white'
          }}
        ></textarea>
      </div>

      <button
        className="btn btn-primary mx-2"
        onClick={handleUpClick}
      >
        Convert to Upper Case
      </button>

      <button
        className="btn btn-primary mx-2"
        onClick={handleDownClick}
      >
        Convert to Lower Case
      </button>

      <button
        className="btn btn-primary mx-2"
        onClick={handlespeak}
      >
        Speak
      </button>

      <button
        className="btn btn-primary mx-2"
        onClick={handleRemoveSpaces}
      >
        Remove Extra Spaces
      </button>

      <h2 className="mt-4">Text Summary</h2>

      <p>{text === "" ? 0 : text.split(" ").filter(word => word !== "").length} words</p>

      <p>{text.length} characters</p>

      <h2>Preview</h2>

      <p>{text.length > 0 ? text : "Enter some text above to preview it here"}</p>

    </div>
  )
}