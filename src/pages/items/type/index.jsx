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
        name: '语文',
        list: [{ name: '选择题' }, { name: '阅读题' }, { name: '诗词赏析' }]
    },
    {
        name: '数学',
        list: [{ name: '选择题' }, { name: '填空题' }, { name: '计算题' }]
    },
    {
        name: '英语',
        list: [{ name: '选择题' }, { name: '完形填空' }, { name: '阅读理解' }]
    }
]

const Index = props => {
    const [chs1, setChs1] = useState(dropList[0])
    const [chs2, setChs2] = useState(chs1.list[0])
    return (
        <div className="page_type">
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
                        setChs2(target.list[0])
                    }}
                />
                <DropDown
                    list={chs1.list}
                    choosen={chs2.name}
                    setChoosen={name => {
                        let target = chs1.list.find(item => item.name === name)
                        setChs2(target)
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
