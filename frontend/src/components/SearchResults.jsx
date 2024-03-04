import React from 'react'
import '../Styles/SearchResults.css'

const SearchResults = ({result}) => {
  return (
    <div 
    className='search-result' 
    onClick={(e) => alert('You clicked on ${result.name}')}>
      {result.name}
    </div>
  )
}

export default SearchResults
