import React from 'react'


function ProductFormHandler() {
    return (
        <div>

            <div className="container border border-dark border-5 p-3 w-50 mt-2">

                <h4 className='bg-dark text-white text-center p-2'>Add Product</h4>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="htmlForm-label">Product Name</label>
                    <input type="email" className="htmlForm-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='productName' />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="htmlForm-label">Product Description</label>
                    <input type="email" className="htmlForm-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='productDescription' />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="htmlForm-label">Product price</label>
                    <input type="text" className="htmlForm-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='productPrice' />
                </div>

                <button type="submit" className="btn btn-dark">Add</button>

            </div>
        </div>
    )
}

export default ProductFormHandler;
