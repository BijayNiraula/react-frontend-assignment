import React from 'react'
import { Link } from 'react-router-dom'
import { remove } from '../store/slices/cartsSlice'
import { useDispatch } from 'react-redux'
import { memo } from 'react'
function CartsItemCard(props) {
  const dispatch = useDispatch();

  const handleRemoveCartsProduct = () => {
    dispatch(remove(props.data.id));
  }
  return (
    <div className='row  cart_item_card my-3 p-2'>
      <div className='col-sm-3 col-4'>
        <img src={props.data.image} className=' img-fluid' height={150} width={150} alt="" />
      </div>
      <div className="col-sm-9 col-8">
        <p className=''>{props.data.title}
          <br />
          <small>price : $ {props.data.price}</small>
        </p>
        <div className="d-flex justify-content-around mt-2">
          <Link to={`/productDetail/${props.data.id}`} className="btn-primary btn py-1"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
          </svg> </Link>
          <button className="btn-danger btn py-1" onClick={handleRemoveCartsProduct}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default memo(CartsItemCard);