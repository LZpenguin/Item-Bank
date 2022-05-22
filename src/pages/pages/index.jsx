import React from 'react'
import { Outlet } from 'react-router'
import './index.css'

const Index = () => {
    return (
        <div className="page_pages">
            <div className="left_bar">leftbar</div>
            <div className="main">
                <div className="header">header</div>
                <div className="pages">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    )
}

export default Index
