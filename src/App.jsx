import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import Pages from './pages/pages'
import Index from './pages/index'
import Item from './pages/item'
import Grade from './pages/grade'
import Subject from './pages/subject'
import Type from './pages/type'
import './App.css'

function App() {
    const [choosen, setChoosen] = useState('/')
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Pages choosen={choosen} setChoosen={setChoosen} />}>
                        <Route path="/" element={<Index />}></Route>
                        <Route path="/item" element={<Item choosen={choosen} setChoosen={setChoosen} />}></Route>
                        <Route path="/grade" element={<Grade choosen={choosen} setChoosen={setChoosen} />}></Route>
                        <Route path="/subject" element={<Subject choosen={choosen} setChoosen={setChoosen} />}></Route>
                        <Route path="/type" element={<Type choosen={choosen} setChoosen={setChoosen} />}></Route>
                    </Route>
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App
