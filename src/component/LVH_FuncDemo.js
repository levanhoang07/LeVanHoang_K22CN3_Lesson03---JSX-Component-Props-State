import React from 'react'

export default function LVH_FuncDemo(props){
    return(
        <div>
            <hr/>
            <h2>Function Component Demo</h2>
            <h3>Sử dụng thuộc tính Props</h3>
            <p>UserName:{props.userName}</p>
            <p>FullName:{props.FullName}</p>
            <p>Age:{props.age}</p>
        </div>
    )
}