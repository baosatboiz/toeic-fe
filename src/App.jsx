import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import fetchData from './fetch/fetchData'
import ExamSchedule from './ExamSchedule/index.jsx'
import ResultPage from './ResultPage/index.jsx'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import ExamPageWrapper from './ExamPageWrapper.jsx'
function App() {
  const [schedule,setSchedule] = useState([]);
  const [loading,setLoading] = useState(true);
  useEffect(()=> {
    fetchData(`/api/exam-schedule`)
    .then(data=>{setSchedule(data); setLoading(false);console.log(data);})
    .catch(error=>console.log(error))
    },[])
  if(loading) return <div className="d-flex align-items-center justify-content-center h-100">Loading</div>
  return (
    <div className="bg-light">
      <Router>
        <Routes>
      <Route path='/' element={
        <div className="container py-3">
          <h2 className="fw-bold text-center">Danh sách bài thi</h2>
          <div className="d-flex justify-content-center flex-wrap">
            {schedule.map(s=>
              <ExamSchedule key ={s.scheduleId} data={s}/>
            )}
            </div>
      </div>}
      />      
      <Route path="/exam/:attemptId" element={<ExamPageWrapper/>}></Route>
      <Route path="/result/:attemptId" element={<ResultPage/>}></Route>
      </Routes>
      </Router>
    </div>
  )
}

export default App
