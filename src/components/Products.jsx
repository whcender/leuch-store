import React from 'react'
import products from '../data/products.json'
import Product from './Product'

const Products = () => {

const productsList = products.items.map((product) => {
    return (
      <Product
        key={product.id}
        id={product.id}
        name={product.name}
        description={product.description}
        price={product.price}
        image={product.image}
      />
    )  
})

  return (
    <div id='product'>
        
        <div className='products'>
            {productsList}
          </div>

            
    </div>
  )
}

export default Products