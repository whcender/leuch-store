import React from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import products from '../data/products.json'
import SingleProduct from './SingleProduct'
import Footer from '../components/Footter'



const PostPage = () => {

    const { id } = useParams();
    console.log(id);

    const product = products.items.find((product) => product.id === id);
    console.log(product);

    return (
    <div>
        <Navbar />
        <SingleProduct product={product} />
        <Footer />
    </div>
  )
}

export default PostPage