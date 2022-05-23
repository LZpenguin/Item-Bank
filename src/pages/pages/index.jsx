import React, { useState } from 'react'
import { Outlet } from 'react-router'
import './index.css'

import Header from '../../components/header'

const Index = props => {
    return (
        <div className="page_pages">
            <div className="left_bar">leftbar</div>
            <div className="main">
                <Header choosen={props.choosen} setChoosen={props.setChoosen}></Header>
                <div className="pages">
                    <Outlet choosen={props.choosen} setChoosen={props.setChoosen}></Outlet>
                </div>
            </div>
        </div>
    )
}

export default Index
