import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, Form, RouterProvider } from "react-router-dom";

import CategoryFormHandler from './components/category/CategoryFormHandler';
import ProductFormHandler from './components/Products/ProductFormHandler';
import CategoryItem from './components/category/CategoryItem';
import Product from './components/Products/Product';
import ProductItem from './components/Products/ProductItem';





const router=createBrowserRouter([
  {path:"/products",element:
    <>
  <ProductFormHandler/>
  <ProductItem/> </>},
  {path:"/category",element:<div><CategoryFormHandler/><CategoryItem/></div>}

])

function App() {
  return (
    <div >
             <RouterProvider router={router} />
       
    </div>
  );
}

export default App;
