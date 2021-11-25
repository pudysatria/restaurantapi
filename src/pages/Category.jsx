import axios from 'axios'
import React,{useEffect, useState} from 'react'
import Card from '../components/Card'

const Category = () => {
    const [categories, setCategories] = useState([])
    const fetchData = ()=>{
        axios({url:"https://www.themealdb.com/api/json/v1/1/categories.php"}).then(res=>{
            setCategories(res.data.categories)
        }).catch(err=>{
            throw err
        })
    }

    useEffect(() => {
       fetchData()
    }, [])

    return (
        <>
         <h1 className="header">Category</h1>  
        <div className="container">

         {categories.map(category=>(
           <Card desc={category.strCategoryDescription} image={category.strCategoryThumb} name={category.strCategory} key={category.idCategory} bool style={category.idCategory%2===0?{fontWeight:"bold"}:{fontStyle:"italic",fontWeight:"normal"}}/>
         ))} 
         </div>
        </>
    )
}


export default Category
