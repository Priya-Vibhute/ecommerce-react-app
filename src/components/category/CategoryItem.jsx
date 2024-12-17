import React, { useEffect, useState } from 'react'

function CategoryItem() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {

    fetch("http://localhost:8080/categories")
      .then(data => data.json())
      .then(data => {

        setCategories(data["_embedded"]["categories"]);
      })


  }, [])
  return (
    <div className='container mt-3'>

      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Category Name</th>
            <th scope="col">Category Description</th>
            <th scope="col">Action</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (

            <tr>
              <th scope="row">1</th>
              <td>{category.categoryName}</td>
              <td>{category.categoryDescription}</td>
              <td><button type="button" class="btn btn-success">Update</button></td>
              <td><button type="button" class="btn btn-danger">Delete</button></td>

            </tr>

       ))}


        </tbody>
      </table>

    </div>
  )
}

export default CategoryItem
