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

  const handleClearText = () => {
    setText("");
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    alert("Text Copied!");
  }

  const handlePaste = async () => {
    const pastedText = await navigator.clipboard.readText();
    setText(pastedText);
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
        className="btn btn-primary mx-2 my-2"
        onClick={handleUpClick}
      >
        Convert to Upper Case
      </button>

      <button
        className="btn btn-primary mx-2 my-2"
        onClick={handleDownClick}
      >
        Convert to Lower Case
      </button>

      <button
        className="btn btn-primary mx-2 my-2"
        onClick={handlespeak}
      >
        Speak
      </button>

      <button
        className="btn btn-primary mx-2 my-2"
        onClick={handleRemoveSpaces}
      >
        Remove Extra Spaces
      </button>

      <button
        className="btn btn-primary mx-2 my-2"
        onClick={handleClearText}
      >
        Clear Text
      </button>

      <button
        className="btn btn-primary mx-2 my-2"
        onClick={handleCopy}
      >
        Copy Text
      </button>

      <button
        className="btn btn-primary mx-2 my-2"
        onClick={handlePaste}
      >
        Paste Text
      </button>

      <h2 className="mt-4">Text Summary</h2>

      <p>
        <strong>Words:</strong>{" "}
        {text.split(" ").filter(word => word !== "").length}
      </p>

      <p>
        <strong>Characters:</strong> {text.length}
      </p>

      <p>
        <strong>Reading Time:</strong>{" "}
        {(0.008 * text.split(" ").filter(word => word !== "").length).toFixed(2)} Minutes
      </p>

      <h2>Preview</h2>

      <p>
        {text.length > 0
          ? text
          : "Enter some text above to preview it here."}
      </p>

    </div>
  )
}