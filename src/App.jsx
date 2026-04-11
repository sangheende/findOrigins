import './App.css'
import { Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import Report from './pages/Report'
import Result from './pages/Result'
import NotFound from './pages/NotFound'

import { db } from './lib/firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { useEffect } from 'react';


function App() {

  return (
    <>
    <div>
      <Link to="/">Home</Link>
      <Link to="/report">Report</Link>
      <Link to="/result">Result</Link>
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/report" element={<Report />} />
      <Route path="/result" element={<Result />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  )
}


export default App
