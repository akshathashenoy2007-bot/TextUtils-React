import React from 'react'

export default function About(props) {
  return (
    <div
      className="container my-3"
      style={{
        color: props.mode === 'light' ? 'black' : 'white'
      }}
    >
      <h1>About TextUtils</h1>

      <div className="accordion" id="accordionPanelsStayOpenExample">

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              About TextUtils
            </button>
          </h2>

          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
          >
            <div className="accordion-body">
              <strong>TextUtils</strong> is a simple and useful text utility
              application that helps users analyze and modify text efficiently.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              Features
            </button>
          </h2>

          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              You can convert text to uppercase, lowercase, remove extra
              spaces, count words and characters, preview text, and use
              text-to-speech.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              Why Use TextUtils?
            </button>
          </h2>

          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              TextUtils is fast, easy to use, and helps save time when working
              with text. It is useful for students, writers, and professionals.
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}