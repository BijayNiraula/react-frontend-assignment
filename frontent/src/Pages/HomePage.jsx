import React from 'react';
import { useQuery } from 'react-query';
import ProductCard from '../Components/ProductCard';
import Header from '../Components/Header';
import CartButton from '../Components/CartButton';
import LoadingScreen from '../Components/LoadingScreen';
import ErrorPage from './ErrorPage';
import { memo } from 'react';
import Footer from '../Components/Footer';
import { Helmet } from 'react-helmet';
function HomePage() {
  const { data, isLoading, isError, error } = useQuery(["products"],
    async () => {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/products`);
      return res.json();
    }
  )

  if (isLoading) {
    return (
      <LoadingScreen />
    )
  }

  if (isError) {
    return (
      <ErrorPage />
    )
  }
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home page</title>
      </Helmet>
      <Header />
      <div className="container">
        <div className="row p-0 m-0 justify-content-center ">
          <div className="col-12 d-flex justify-content-end py-2">
            <CartButton />
          </div>
          {
            data.products.map(product => <ProductCard key={product.id} product={product} />)
          }
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default memo(HomePage);