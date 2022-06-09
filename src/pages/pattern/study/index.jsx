import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const Index = () => {
    return (
        <div className="page_index">
            <div className="group edit_src">
                <div className="title">编辑来源</div>
                <div className="logo">
                    <img src="edit_src.png" alt="" />
                </div>
            </div>
            <div className="group bbs">
                <div className="title">互联论坛</div>
                <div className="logo">
                    <img src="bbs.png" alt="" />
                </div>
            </div>
            <div className="group pattern">
                <div className="title">模式选择</div>
                <div className="logo">
                    <img src="pattern.png" alt="" />
                </div>
            </div>
            <div className="group user">
                <div className="title">用户中心</div>
                <div className="logo">
                    <img src="user.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Index
