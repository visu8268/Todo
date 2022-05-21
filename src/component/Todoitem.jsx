import React from 'react'
import styles from '../component/styles.module.css'


const Todoitem=({title,handleDelete,id})=> {

  const handleDeletefn = ()=> {
    handleDelete(id)
 }


  return (
    <div className={styles.showdata}>
      
        <h3>Name:{title}</h3>
          <button onClick={handleDeletefn} className={styles.btndelete}>Delete</button>
    </div>
  )
}

export default Todoitem