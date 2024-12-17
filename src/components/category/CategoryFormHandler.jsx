import React, { useEffect, useState } from 'react'


function CategoryhtmlFormHandler() {


    
    const submitHandler=(event)=>{
  
         event.preventDefault();

         

         fetch("http://localhost:8080/categories",
         {method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            "categoryName":event.target.categoryName.value,
            "categoryDescription":event.target.categoryDescription.value}
           )})

    }

    return (
        <div>

  <div className="container border border-dark border-5 p-3 w-50 mt-2">

    <h4 className='bg-dark text-white text-center p-2' >Add category</h4>

<form action="" onSubmit={submitHandler}>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="htmlForm-label">Category Name</label>
                    <input type="text" className="htmlForm-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='categoryName'/>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="htmlForm-label">Category Description</label>
                    <input type="text" className="htmlForm-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='categoryDescription'/>
                </div>
                
                <button type="submit" className="btn btn-dark">Add</button>
                </form>
                </div>
        </div>
    )
}

export default CategoryhtmlFormHandler;
