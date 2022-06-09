import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const list = [
    {
        name: '编辑来源',
        class: 'edit_src',
        list: [{ name: '全部' }, { name: '华中科技大学' }, { name: '华中师范大学' }, { name: '河北科技大学' }, { name: '河北师范大学' }]
    },
    {
        name: '模式选择',
        class: 'pattern',
        list: [
            { name: '知识学习', route: '/pattern/study' },
            { name: '励志文章', route: '/pattern/courage' },
            { name: '试题模式', route: '/pattern/test' }
        ]
    },
    {
        name: '用户中心',
        class: 'user',
        list: [{ name: '账户管理' }, { name: '我的设置' }, { name: '实名认证' }, { name: '账户信息' }, { name: '个人中心' }]
    }
]

const Index = props => {
    const [drop1, setDrop1] = useState(false)
    const [drop2, setDrop2] = useState(false)
    const [drop3, setDrop3] = useState(false)
    return (
        <div className="component_leftBar">
            <div className="group edit_src">
                <div className="title" onClick={() => dropFunc(drop1, setDrop1)}>
                    编辑来源
                    <img src="drop.png" alt="" style={drop1 ? { transform: 'none' } : {}} />
                </div>
                <Link to="/item" onClick={() => props.setChoosen('/item')}>
                    <div className="list" style={drop1 ? { height: `${list[0].list.length * 35}px` } : {}}>
                        {list[0].list.map(item => {
                            return (
                                <div className="item_navi" key={item.name}>
                                    {item.name}
                                </div>
                            )
                        })}
                    </div>
                </Link>
            </div>
            <div className="group pattern">
                <div className="title" onClick={() => dropFunc(drop2, setDrop2)}>
                    模式选择
                    <img src="drop.png" alt="" style={drop2 ? { transform: 'none' } : {}} />
                </div>
                <div className="list" style={drop2 ? { height: `${list[1].list.length * 35}px` } : {}}>
                    {list[1].list.map(item => {
                        return (
                            <Link key={item.name} to={item.route} onClick={() => props.setChoosen(item.route)}>
                                <div className="item_navi">{item.name}</div>
                            </Link>
                        )
                    })}
                </div>
            </div>
            <div className="group user">
                <div className="title" onClick={() => dropFunc(drop3, setDrop3)}>
                    用户中心
                    <img src="drop.png" alt="" style={drop3 ? { transform: 'none' } : {}} />
                </div>
                <div className="list" style={drop3 ? { height: `${list[2].list.length * 35}px` } : {}}>
                    {list[2].list.map(item => {
                        return (
                            <div className="item_navi" key={item.name}>
                                {item.name}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
    function dropFunc(drop, setDrop) {
        setDrop(!drop)
    }
}

export default Index
