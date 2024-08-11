import React, { useEffect, useState } from 'react'
import './CountriesBox.css'
import axios from 'axios'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import CountriesCard from './CountriesCard'

function CountriesBox() {
  const [cdata,setCData]=useState([]);
  useEffect(()=>{
    getData()
  },[])
  const navigate=useNavigate()
    const getData=()=>{

      axios.get('https://restcountries.com/v3.1/all'). then((res)=>{
        console.log(res);
       setCData(res.data)
      })
      .catch((err)=>{
          alert(err)
          navigate('/')
      })
    }


  return (
    <div className='CountriesBox'>

            

{cdata.map((country,index)=><CountriesCard country={country} key={index}/>)}

    </div>
  )
}

export default CountriesBox;