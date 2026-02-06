import { useEffect, useState } from 'react'
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
import ResultPage from './ResultPage'
import ExamLayout from './ExamLayout'
import AppLayout from './AppLayout'
import { ExamStaticProvider } from './ExamStaticProvider'
import fetchData from './fetch/fetchData'
import { ExamDynamicProvider } from './ExamDynamicProvider'
function App() {
  const [exam,setExam] = useState({});
  const [loading,setLoading] = useState(true);
  const attemptId = "3d26ea19-d522-4651-aa30-d93707a1787f";
  useEffect(()=> {
    fetchData(`/api/exam-attempts/${attemptId}/questions`)
    .then(data=>{setExam(data); setLoading(false);console.log(data);})
    .catch(error=>console.log(error))
    },[])
  if(loading) return <div className="d-flex align-items-center justify-content-center h-100">Loading</div>
  return (
    <div className="bg-light">
      {/* <ExamStaticProvider exam={exam}>
        <ExamDynamicProvider attemptId={attemptId}>
      <AppLayout/>
      </ExamDynamicProvider>
      </ExamStaticProvider> */}
    </div>
  )
}

export default App
