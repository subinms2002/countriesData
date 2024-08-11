import React from 'react'
import './Todolistiteam.css'

function Todolistiteam({ count,label,completed,makeTodoDone,deleteTodo}) {
  return (
    <div className='listiteam'>

      <h3 className={`${completed? 'done' :"" }`}> {count+1}. {label} </h3>
     <button onClick={()=>deleteTodo(count)}>delete</button> 
     {!completed && <button onClick={()=>makeTodoDone(count)}>done</button>}
    
    </div>
  );
}

export default Todolistiteam