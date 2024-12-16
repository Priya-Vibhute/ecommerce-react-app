import React from 'react'

function CategoryItem() {
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
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td><button type="button" class="btn btn-success">Update</button></td>
          <td><button type="button" class="btn btn-danger">Delete</button></td>
    
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td><button type="button" class="btn btn-success">Update</button></td>
          <td><button type="button" class="btn btn-danger">Delete</button></td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td><button type="button" class="btn btn-success">Update</button></td>
          <td><button type="button" class="btn btn-danger">Delete</button></td>
        </tr>
      </tbody>
    </table>
          
        </div>
  )
}

export default CategoryItem
