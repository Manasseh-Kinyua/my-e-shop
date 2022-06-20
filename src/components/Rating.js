import React from 'react'

function Rating({value, text, color}) {
  return (
    <div className='rating'>
      <span>
        <i style={color}>

        </i>
      </span>
    </div>
  )
}

export default Rating
