import React from 'react';
import { useSelector } from 'react-redux';
import CartsItemCard from '../Components/CartsItemCard';
import BackButton from '../Components/BackButton';
import { memo } from 'react';
import EmptyCartsMessage from '../Components/EmptyCartsMessage';
import { Helmet } from 'react-helmet';
function CartsPage() {
  const cartsProducts = useSelector((state) => state.carts.cartsProducts);

  return (
    <div className='container'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Carts page</title>
      </Helmet>
      <div className="row justify-content-center mt-5">
        <div className="d-flex justify-content-start col-12 mb-2">
          <BackButton />
        </div>
        <div className=" col-md-8 col-sm-10 col-11">
          <h3>Your Carts Items : </h3>
          <hr />
          <div>
            {cartsProducts.length ?
              cartsProducts.map((cartProduct) => <CartsItemCard key={cartProduct.id} data={cartProduct} />)
              : <EmptyCartsMessage />
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(CartsPage);