import React, { useEffect, useState } from 'react'
import { Navigate, Link } from 'react-router-dom'
import './index.css'

const list = [
    {
        to: '/',
        name: '首页'
    },
    {
        to: '/item',
        name: '试题'
    },
    {
        to: '/grade',
        name: '年级'
    },
    {
        to: '/subject',
        name: '科目'
    },
    {
        to: '/type',
        name: '题型'
    },
    {
        to: '/publish',
        name: '发布'
    }
]

const Index = props => {
    return (
        <div className="component_header">
            <div className="header_info">
                <div className="route">
                    <img src="home.png" alt="" />
                    {props.tip}
                </div>
            </div>
            <div className="header_navi">
                {props.routes.map(item => {
                    return (
                        <Link key={item.route} to={item.route} className={item.route === props.choosen ? 'choosen' : ''} onClick={() => props.setChoosen(item.route)}>
                            {item.name}
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Index
