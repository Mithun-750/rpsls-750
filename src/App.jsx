import { useEffect, useState } from 'react';
import './App.css'
import Header from './Component/Header/Header';
import MoveContainer from './Component/MoveContainer/MoveContainer';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Result from './Component/Result/Result';
import Rules from './Component/Rules/Rules';

function App() {
  const [Score, setScore] = useState(0)
  const [CMove, setCMove] = useState("")
  const [Pmove, setPmove] = useState("")
  const [Status, setStatus] = useState("")

  useEffect(() => {
    console.log('Hi1')

    return () => {
      console.log('Hi2')

    }
  }, [])


  return (
    <>
      <Router>

        <div id="app">
          <Header Score={Score} />
          <Routes>
            <Route path='/' element={<MoveContainer setScore={setScore} setCMove={setCMove} Score={Score} setPmove={setPmove} setStatus={setStatus} />} />
            <Route path='/result' element={<Result CMove={CMove} Pmove={Pmove} Status={Status} />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>


          <Rules />
        </div>
      </Router>
    </>
  )
}

export default App
