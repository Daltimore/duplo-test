import React, { Suspense } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Pages
import SignUpPage from './pages/signup'
import LoginPage from './pages/login'

const App: React.FC = () => {
  return (
    <div className='App'>
      <Suspense>
        <Router>
          <Routes>
            <Route path={'/'} element={<SignUpPage />} />
            <Route path={'/login'} element={<LoginPage />} />
          </Routes>
        </Router>
      </Suspense>
    </div>
  )
}

export default App;
