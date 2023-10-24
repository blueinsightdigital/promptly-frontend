import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container py-4 px-3 mx-auto">
        <h1>Hello, Bootstrap and Vite!</h1>
        <button className="btn btn-primary" onClick={() => setCount((count) => count + 1)}>
          Primary button count is {count}
        </button>
      </div>
    </>
  )
}

export default App
