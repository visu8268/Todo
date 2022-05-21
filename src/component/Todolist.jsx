import React from 'react'
import Todoitem from './Todoitem'

const Todolist=({title,todos,id,handleDelete}) =>{
    return (
        <div>
            <Todoitem key={todos.id} id={id} title={title} handleDelete={handleDelete}></Todoitem>

        </div>
    )
}
export default Todolist