import axios from 'axios'
import React,{useEffect, useState} from 'react'
import {  useParams} from 'react-router-dom'
import Card from '../components/Card'

const Detail = () => {
    const {id} = useParams()
    const [category, setCategory] = useState([])
    const fetchData = ()=>{
        axios({url:"https://www.themealdb.com/api/json/v1/1/filter.php?c="+id}).then(res=>{
            setCategory(res.data.meals)
        }).catch(err=>{
            throw err
        })
    }

    useEffect(() => {
       fetchData()
    }, )
    return (
        <>
         <h1 className="header">all {id} menus </h1>  
        <div className="container"> 

            {category.map(cat=>(
                <Card name={cat.strMeal} image={cat.strMealThumb}/>
            ))}
        </div>
        </>
    )
}

export default Detail
