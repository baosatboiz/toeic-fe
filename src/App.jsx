import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import QuestionChoice from './QuestionChoice'
import 'bootstrap/dist/css/bootstrap.min.css';
import QuestionGroup from './QuestionGroup'
import MediaContent from './MediaContent'
import ExamHeader from './ExamHeader'
import Palete from './Palete'
import Pagination from './Pagination'
function App() {
  return (
    <div className="">
      <QuestionChoice/>
      <QuestionGroup/>
      <MediaContent/>
      <ExamHeader/>
      <Palete/>
      <Pagination/>
    </div>
  )
}

export default App
