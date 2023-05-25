import React from 'react'

export const List = (props) => {
  return (
    <div>
        <ul  className="list-group" style={{width: "18rem"}} >
            <li className="list-group-item1">{props.caracteristica1}</li>
            <li className="list-group-item2">{props.caracteristica2}</li>
            <li className="list-group-item3">{props.caracteristica3}</li>
            
        </ul>
    </div>
  )
}
