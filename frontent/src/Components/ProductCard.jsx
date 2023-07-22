import React from 'react'
import { Link } from 'react-router-dom'
import { memo } from 'react'
import StarRatting from './StarRatting'
function ProductCard({ product }) {
  return (
    <Link to={`/productDetail/${product.id}`} className='col-lg-3 col-md-4 col-sm-6 col-11  p-sm-3 p-2 py-3 product_card text-decoration-none text-dark'>
      <div className=" h-100  p-2 pt-3 body">
        <div className="w-100 d-flex justify-content-center">
          <img src={product.images[0]} className='img-fluid ' height={200} width={200} />
        </div>
        <p className='fw-bold  mt-2'>{product.title}
        </p>
        <p className='mt-2 '>
          <StarRatting rating={product.rating}  />
        </p>
      </div>
    </Link>
  )
}

export default memo(ProductCard);