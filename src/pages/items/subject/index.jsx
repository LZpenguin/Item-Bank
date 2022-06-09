import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.css'

import DropDown from '../../../components/dropDown'

const list = [
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

const dropList = [
    {
        name: '语文'
    },
    {
        name: '数学'
    },
    {
        name: '英语'
    },
    {
        name: '理综'
    },
    {
        name: '文综'
    }
]

const Index = props => {
    const [chs1, setChs1] = useState(dropList[0])
    return (
        <div className="page_subject">
            <div className="filter_navi">
                {list.map(item => {
                    return (
                        <Link key={item.to} className={`navi ${item.to.slice(1)} ${item.to === props.choosen ? 'choosen' : ''}`} to={item.to} onClick={() => props.setChoosen(item.to)}>
                            <img src={`${item.to.slice(1)}.png`} alt="" />
                            <div className="title">{item.name}</div>
                        </Link>
                    )
                })}
            </div>
            <div className="filter_detail">
                <div className="title">请选择:</div>
                <DropDown
                    list={dropList}
                    choosen={chs1.name}
                    setChoosen={name => {
                        let target = dropList.find(item => item.name === name)
                        setChs1(target)
                    }}
                />
            </div>
            <div className="item_list">
                <div className="border">
                    <div className="item">
                        <div className="title">题目</div>
                        <div className="options">
                            <div className="option">A</div>
                            <div className="option">B</div>
                            <div className="option">C</div>
                            <div className="option">D</div>
                        </div>
                        <div className="answer_correct">解析</div>
                        <div className="answer_fill">作答情况</div>
                        <div className="point">得分</div>
                    </div>
                    <div className="item">
                        <div className="title">题目</div>
                        <div className="options">
                            <div className="option">A</div>
                            <div className="option">B</div>
                            <div className="option">C</div>
                            <div className="option">D</div>
                        </div>
                        <div className="answer_correct">解析</div>
                        <div className="answer_fill">作答情况</div>
                        <div className="point">得分</div>
                    </div>
                    <div className="item">
                        <div className="title">题目</div>
                        <div className="options">
                            <div className="option">A</div>
                            <div className="option">B</div>
                            <div className="option">C</div>
                            <div className="option">D</div>
                        </div>
                        <div className="answer_correct">解析</div>
                        <div className="answer_fill">作答情况</div>
                        <div className="point">得分</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index
