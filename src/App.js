import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Home from './components/Home'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  return (
    <Router>
      <div className='container'>
        <Header
          showForm={() => setShowAddTask(!showAddTask)}
          show={showAddTask}
        />
        <Routes>
          <Route path='/' exact element={<Home showAddTask={showAddTask} />} />
          <Route path='/about' exact element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
