import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const Index = props => {
    return (
        <div className="page_published">
            <div className="filter_detail">
                <div className="search">
                    <img src="search.png" alt="" />
                    <input type="text" placeholder="关键词查找" />
                </div>
            </div>
            <div className="publish">
                <textarea className="text" name="" id="" cols="30" rows="10" placeholder="请输入文本"></textarea>
                <input id="file" type="file" style={{ display: 'none' }} />
                <img src="" alt="" className="pic" onClick={choosePic}></img>
                <div className="btn_publish">发布讨论</div>
            </div>
        </div>
    )
    function choosePic() {
        let input = document.querySelector('#file')
        let pic = document.querySelector('.pic')
        input.click()
        input.addEventListener('change', () => {
            let picInfo = input.files[0]
            let url = URL.createObjectURL(picInfo)
            pic.src = url
        })
    }
}

export default Index
