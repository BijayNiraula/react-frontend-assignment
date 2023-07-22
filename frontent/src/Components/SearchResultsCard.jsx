import React from 'react'
import StarRatting from './StarRatting'
import { Link } from 'react-router-dom'
function SearchResultsCard(props) {
    
  return (
    
    <Link to={`/productDetail/${props.data.id}`} className='row mb-4 search_results_card p-3'>
       <div className="col-5 p-2">
          <img src={props.data.images[0]} alt="" width={100} height={100} className="img-fluid" />
       </div>
       <div className="col-7">
              <span className='fs-4'>{props.data.title}  </span>
              <StarRatting rating={props.data.rating}/>
               <p className='mt-2 text-dark'>Price : <span className="text-danger"> $ {props.data.price}</span></p>
       </div>
    </Link>
  )
}

export default SearchResultsCard