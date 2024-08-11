import React from 'react'
import { useState } from 'react';
import Todolistiteam from '../Todolistiteam/Todolistiteam'
import './Todomain.css'


function Todomain() {

    
        const [todo, setTodo] = useState([]);
        const [newInput, setInput] = useState('');
        const arr = new Array(5).fill(0)
        const handleInputChange = (event) => {
      
          setInput(event.target.value)
          //console.log(newInput);
        }
        const addnewTodo = () => {
          setTodo([...todo, { label: newInput, completed: false }]);
          setInput('')
        };
      
        const makeTodoDone = (index) => {
          const temporary = [...todo]
          temporary[index].completed=true
          setTodo(temporary)
      
        }
       const deleteTodo=(index)=>{
        const temp =[...todo];
        temp.splice(index, 1);
        setTodo(temp);
        
       }
        
        return (
          <div className='app-container'>
            <div className='todo-box'>
              <h1>ToDo List</h1>
              <div>
                <input type="text" onChange={handleInputChange} value={newInput} />
      
                <button onClick={addnewTodo}>add</button>
              </div>
              <div>
                {todo.map ((ele, index) => (
                <Todolistiteam
                  label={ele.label} 
                  count={index} 
                  key={index}
                  completed={ele.completed}
                  makeTodoDone={makeTodoDone} 
                  deleteTodo={deleteTodo}
                  />
                  ))}
      
              </div>
            </div>
      
          </div>
        );
      }
      
      export default Todomain;
      



