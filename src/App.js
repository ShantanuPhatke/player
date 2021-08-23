import React, { useState, useRef } from "react"
import "./app.scss"

function App() {
  const [currentFile, setCurrentFile] = useState()

  const refAudioSrc = useRef()

  const handleChange = (e) => {
    const files = e.target.files
    const urls = Array.from(files).map((file) => URL.createObjectURL(file))
    console.log(urls)
    // console.log(files)
    setCurrentFile(urls[1])
    refAudioSrc.current.load()
  }

  return (
    <div className="app">
      <div className="container">
        <input
          type="file"
          multiple="multiple"
          accept=".mp3"
          className="thumbnail"
          onChange={(e) => handleChange(e)}
        />

        <div className="audio-info">
          <h3>Audio Name</h3>
          <p>Artist Meta Data</p>
        </div>
        <div className="controller">
          <audio ref={refAudioSrc} id="audio" controls>
            <source src={currentFile} id="src" />
          </audio>
          {/* <div className="slider">
            <input type="range" min="0" max="100" />
          </div>
          <div className="btns">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="btn"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="btn"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="btn"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z" />
            </svg>
          </div>
         */}
        </div>
      </div>
    </div>
  )
}

export default App
