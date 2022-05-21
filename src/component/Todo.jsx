import React from 'react'
import {useState} from 'react'
import {v4 as uuid} from"uuid"
import Todolist from './Todolist'
import styles from '../component/styles.module.css'

const Todo = () => {
 
    const [value, setValue]=useState("")
    const [todos,setTodo]=useState([])

    const handle=()=>{
        const datainfo={
            id:uuid(),
            title:value
        }
        setTodo([...todos,datainfo])
        setValue(" ")
    }

    const handleDelete =(id) =>{
      let updatetodo = (todos.filter((todo) => todo.id !== id))
      setTodo(updatetodo)
   }
  


  return (
    
    <div className={styles.container}>
      <h1 className={styles.headname}>TODO APP</h1>
    <input value={value} 
    type="text"
    className={styles.data}
     placeholder='Add to todo'
     onChange={(e)=>setValue(e.target.value)}/>

     <button onClick={handle} className={styles.btn1}>Add Todo Data</button>

     {todos.map((datainfo)=>(
         <Todolist key={datainfo.id} title={datainfo.title} id={datainfo.id} todos={todos} handleDelete={handleDelete}/>
     ))}


    </div>
  )
}


export default Todo