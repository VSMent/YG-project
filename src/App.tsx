import React, { useEffect } from 'react'
import './App.css'
import { loadFromLS } from './Utils/LocalStorage'
import { LS_ITEM_USERS } from './data/constants'
import { populateLSWithDummyData } from './Utils/DummyDataGenerator'
import { RouterProvider } from 'react-router'
import Router from './Components/Router'

// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <p>
//     <code>src/App.js</code> and save to reload.
//   </p>
//   <a
//     className="App-link"
//     href="https://reactjs.org"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     Learn React
//   </a>
//   <button type="button" onClick={()=>{saveToLS('key',[1,2,{"asd":1}])}}>SAve</button>
// </header>

function App() {
  useEffect(() => {
    const users = loadFromLS(LS_ITEM_USERS)
    !users && populateLSWithDummyData().catch(console.log)
  }, [])

  return <RouterProvider router={Router} />
}

export default App
