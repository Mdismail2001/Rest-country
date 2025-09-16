import { Suspense } from 'react'
import './App.css'
import Countries from './components/countries/Countries'


const countriesPromise = fetch('https://restcountries.com/v3.1/all?fields=name,capital,region,flags')
                        .then(res => res.json())

function App() {

  return (
    <>
    <Suspense fallback={<h1>All country info loading......</h1>}>
      <Countries fetchCountries = {countriesPromise}/>
    </Suspense>
    </>
  )
}

export default App
