import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import Pages from './pages/pages'
import Index from './pages/index'
import './App.css'

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Pages />}>
                        <Route path="/" element={<Index />}></Route>
                    </Route>
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App
