import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(()=> {
    getResponse();
  })

  const getResponse = async ()=> {
    try {
      //Fetch request
      const response = await fetch('http://localhost:5000/', {
        method: 'GET',
        headers: {},
      })
      //Check response
      if (!response.ok) {
        throw new Error('Failed request');
      }
      const data = await response.json();
      console.log(data);

    } catch (error: any) {
       setError(error.message);
    }
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
