import React, { useState } from 'react'
import './index.css'

const Index = props => {
    const [drop, setDrop] = useState(false)
    return (
        <div className="component_dropDown" onClick={toggle}>
            <div className="show">{props.choosen}</div>
            <div className="select_list" style={drop ? { height: `${30 * props.list.length}px` } : {}}>
                <div className="option"></div>
                {props.list.map(item => {
                    if (item.name !== props.choosen) {
                        return (
                            <div key={item.name} className="option" onClick={() => props.setChoosen(item.name)}>
                                {item.name}
                            </div>
                        )
                    } else {
                        return ''
                    }
                })}
            </div>
        </div>
    )
    function toggle() {
        setDrop(!drop)
    }
}

export default Index
