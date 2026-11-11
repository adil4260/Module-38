// import from 'react'
import { Suspense } from 'react';
import './App.css'
import Countries from './componetes/Countries/Countries';

const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
  .then(res => res.json())

function App() {
 
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
      <h1>React world on the go...</h1>

    </>
  )
}

export default App
