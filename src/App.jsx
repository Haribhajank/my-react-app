import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
      <div className="button-container">
      <button className="big-button">
          <img src="/music.webp" alt="Button 1" />
        </button>
        <button className="big-button">
          <img src="/OIP.jpeg" alt="Button 2" />
        </button>
        <button className="big-button">
          <img src="/phone_number-512.webp" alt="Button 3" />
        </button>
        <button className="big-button">
          <img src="/R.png" alt="Button 4" />
        </button>
      </div>
    </div>
    </>
  )
}

export default App
