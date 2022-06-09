import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import Pages from './pages/shared/pages'
import Index from './pages/shared/index'
import Item from './pages/items/item'
import Grade from './pages/items/grade'
import Subject from './pages/items/subject'
import Type from './pages/items/type'
import Publish from './pages/items/publish'
import Study from './pages/pattern/study'
import Courage from './pages/pattern/courage'
import Test from './pages/pattern/test'
import './App.css'

const items = [
    {
        name: '首页',
        route: '/'
    },
    {
        name: '试题',
        route: '/item'
    },
    {
        name: '年级',
        route: '/grade'
    },
    {
        name: '科目',
        route: '/subject'
    },
    {
        name: '题型',
        route: '/type'
    },
    {
        name: '发布',
        route: '/publish'
    }
]
const patterns = [
    {
        name: '首页',
        route: '/pattern'
    },
    {
        name: '知识学习',
        route: '/pattern/study'
    },
    {
        name: '励志文章',
        route: '/pattern/courage'
    },
    {
        name: '试题模式',
        route: '/pattern/test'
    }
]

function App() {
    const [choosen, setChoosen] = useState('/')
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Pages choosen={choosen} setChoosen={setChoosen} routes={items} tip={'编辑来源: 全部'} />}>
                        <Route path="/" element={<Index />}></Route>
                        <Route path="/item" element={<Item />}></Route>
                        <Route path="/grade" element={<Grade />}></Route>
                        <Route path="/subject" element={<Subject />}></Route>
                        <Route path="/type" element={<Type />}></Route>
                        <Route path="/publish" element={<Publish />}></Route>
                    </Route>
                    <Route path="/pattern" element={<Pages choosen={choosen} setChoosen={setChoosen} routes={patterns} tip={'模式选择'} />}>
                        <Route path="/pattern" element={<Index />}></Route>
                        <Route path="/pattern/study" element={<Study />}></Route>
                        <Route path="/pattern/courage" element={<Courage />}></Route>
                        <Route path="/pattern/test" element={<Test />}></Route>
                    </Route>
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App
