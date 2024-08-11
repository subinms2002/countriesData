import React from 'react'
import { Link } from 'react-router-dom'
import mernImg from '../../assets/earth.jpeg'

function Home() {
  return (


<div>

    <Link to={'/todo'}> <button>Todo</button></Link>
    <Link to={'/countries'}> <button>Countries</button></Link>
    <img src={mernImg} 
    
    
    
    width='1300px' height='900px' alt="" />
     
       


</div>
  

)

}

export default Home