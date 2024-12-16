import React from 'react'

function ProductItem() {
  return (
    <div className='container mt-3'>

<table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Product Name</th>
      <th scope="col">Product Description</th>
      <th scope="col">Product Price</th>
      <th scope="col">Action</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td><button type="button" class="btn btn-success">Update</button></td>
      <td><button type="button" class="btn btn-danger">Delete</button></td>

    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td><button type="button" class="btn btn-success">Update</button></td>
      <td><button type="button" class="btn btn-danger">Delete</button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td><button type="button" class="btn btn-success">Update</button></td>
      <td><button type="button" class="btn btn-danger">Delete</button></td>
    </tr>
  </tbody>
</table>
      
    </div>
  )
}

export default ProductItem
