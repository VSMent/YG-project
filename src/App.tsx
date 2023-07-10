import React from 'react'
import { RouterProvider } from 'react-router'
import { useDummyChatData, useDummyUserData } from './Utils/DummyDataGenerator'
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
  useDummyUserData()
  useDummyChatData()
  return <RouterProvider router={Router} />
}

export default App