import React from 'react'
import { RouterProvider } from 'react-router'
import Router from './Components/Router'
import {
  useDummyChatData,
  useDummyKanbanData,
  useDummyRecruitingEventData,
  useDummySaleData,
  useDummyTaskData,
  useDummyUserData,
} from '@hooks/DummyDataGenerator'

function App() {
  useDummyUserData()
  useDummyChatData()
  useDummyTaskData()
  useDummyRecruitingEventData()
  useDummyKanbanData()
  useDummySaleData()

  return <RouterProvider router={Router} />
}

export default App
