import React from 'react'


function CategoryhtmlFormHandler() {
    return (
        <div>

  <div className="container border border-dark border-5 p-3 w-50 mt-2">

    <h4 className='bg-dark text-white text-center p-2'>Add category</h4>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="htmlForm-label">Category Name</label>
                    <input type="email" className="htmlForm-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='categoryName'/>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="htmlForm-label">Category Description</label>
                    <input type="email" className="htmlForm-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='categoryDescription'/>
                </div>
                
                <button type="submit" className="btn btn-dark">Add</button>
  
                </div>
        </div>
    )
}

export default CategoryhtmlFormHandler;
