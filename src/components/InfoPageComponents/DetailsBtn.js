import React from 'react'

const DetailsBtn = (props) => {
  return (
    <button className='details_btn' onClick={props.handleClick} >
        {props.btnText}
    </button>
  )
}

export default DetailsBtn
