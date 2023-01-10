import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const SingleProduct = (props) => {

  const [count, setCount] = useState(1)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='single-product'>
      <div className="row">
        <div className="image-sp">
          <img src={props.product.image} alt="" />
        </div>
        <div className="info-sp">
          <h2 className='product-name'>{props.product.name}</h2>
          <h3 className='product-category'>{props.product.category}</h3>
          <h4 className='product-header'>ÜRÜN AÇIKLAMASI</h4>
          <p className='product-description'>{props.product.description}</p>
          <p className='product-price'>{props.product.price}<small>₺</small></p>
          <div className="count">
            <button onClick={() => 
              count > 1 ? setCount(count - 1) : setCount(1)
            } className='minus count-btn'>-</button>
            <span className='count-input'>{count}</span>
            <button onClick={() =>{
              setCount(count + 1)
            }} className='plus count-btn'>+</button>
          </div>
          <Link className='add-cart' to="/buy">Add to cart</Link>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct