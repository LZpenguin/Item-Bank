import React from 'react'
import './index.css'

const Index = props => {
    return (
        <div className="component_rowOptions">
            {props.list.map(item => {
                return (
                    <div key={item} className={`option ${item === props.choosen ? 'choosen' : ''}`} onClick={() => props.setChoosen(item)}>
                        {item}
                    </div>
                )
            })}
        </div>
    )
}

export default Index
