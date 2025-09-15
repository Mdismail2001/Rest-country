import { useState } from 'react'
import './App.css'
import Country from './components/countries/Country'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Country/>
    </>
  )
}

export default App
