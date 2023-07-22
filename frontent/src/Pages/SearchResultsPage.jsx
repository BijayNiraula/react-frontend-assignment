import React from 'react'
import LoadingScreen from '../Components/LoadingScreen';
import ErrorPage from './ErrorPage';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import SearchResultsCard from '../Components/SearchResultsCard';
import { memo } from 'react';
import NoProductFound from '../Components/NoProductFound';
import BackButton from '../Components/BackButton';
import { Helmet } from 'react-helmet';
function SearchResultsPage() {
    const { state } = useLocation();
    const { searchTerm } = state || {}
    const { data, isLoading, isError, error } = useQuery(["products", searchTerm],
        async () => {
            const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/products/search?q=${searchTerm}`);
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
        <div className='container'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{data.title}</title>
            </Helmet>
            <div className="row justify-content-center mt-2">
                <BackButton />
                <div className="col-lg-6 col-md-8 col-sm-10 col-12">
                    <p className='fs-5 fw-bold mt-2 '>Results :  {data.total} </p>
                    {data.products.length ? data.products.map(product => <SearchResultsCard data={product} />) : <NoProductFound />}
                </div>
            </div>
        </div>
    )
}

export default memo(SearchResultsPage);