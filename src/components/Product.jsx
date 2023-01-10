import React from 'react'
import { Link } from 'react-router-dom'

const Product = (props) => {
  return (
    <div>
        <div className='product'>
            <div className='image-pro'>
                <img src={props.image} alt='product' />
            </div>
            <div className='info'>
                <h3 className='product-name'>{props.name}</h3>
                <p className='product-description'>{props.description}</p>
                <p className='product-price'>{props.price}<small>TL</small></p>
                <Link to={`/post/${props.id}`} className='product-link'>Satın Al</Link>
            </div>
        </div>
    </div>
  )
}

export default Product