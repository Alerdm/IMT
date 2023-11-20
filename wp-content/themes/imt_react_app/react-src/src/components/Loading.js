import React from 'react'

function Loading() {
  return (
    <div className='loading'>
        <img src={process.env.PUBLIC_URL + '/images/7.svg'} alt='loading' />        
    </div>
  )
}

export default Loading