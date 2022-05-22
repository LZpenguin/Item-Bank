import React, { useState } from 'react'
import { Navigate } from 'react-router'
import './index.css'

const Index = props => {
    const [loginSucc, setloginSucc] = useState(false)
    return (
        <div className="page_login">
            {loginSucc && <Navigate to="/" />}
            <div className="center_area">
                <div className="title">用户登录</div>
                <div className="box">
                    <div className="switch">
                        <span>登录</span>
                        <span>注册申请</span>
                    </div>
                    <div className="group">
                        <input type="text" className="account" placeholder="请输入账户" />
                    </div>
                    <div className="group">
                        <input type="text" className="password" placeholder="请输入密码" />
                    </div>
                    <div className="btn_login" onClick={login}>
                        登录
                    </div>
                </div>
            </div>
        </div>
    )
    function login() {
        setloginSucc(true)
    }
}

export default Index
