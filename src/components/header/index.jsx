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
    }
]

const Index = props => {
    return (
        <div className="component_header">
            <div className="header_info">info</div>
            <div className="header_navi">
                {list.map(item => {
                    return (
                        <Link key={item.to} to={item.to} className={item.to === props.choosen ? 'choosen' : ''} onClick={() => props.setChoosen(item.to)}>
                            {item.name}
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Index
