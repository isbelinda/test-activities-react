import React from 'react'


const List = ({name, code, room, date, id, onEdit, onDelete}) => (
    <tr>
        <td>{date}</td>
        <td>{code}</td>
        <td>{name}</td>
        <td>{room}</td>
        <td>
            <div className="button-icon delete" onClick={() => onDelete(id)}></div>
            <div className="button-icon edit" onClick={() => onEdit(id)}></div>
        </td>
    </tr>
)

export default List