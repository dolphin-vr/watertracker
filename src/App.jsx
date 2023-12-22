import { useState } from 'react'
import bottle1 from '/water-plastic.svg'
import bottle2 from '/water-blue.svg'
import bottle3 from '/water-yellow.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Water Tracker</h1>
      <div>
          <img src={bottle1} className="logo" alt="logo" />
          <img src={bottle2} className="logo" alt="logo" />
          <img src={bottle3} className="logo" alt="logo" />
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
