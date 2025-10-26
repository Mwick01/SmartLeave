import LoginPage from './components/pages/LoginPage'
import DashBoardPage from './components/pages/DashBoard'
import { HashRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashBoardPage />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
