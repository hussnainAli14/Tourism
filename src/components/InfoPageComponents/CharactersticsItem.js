import React from 'react'
import './styles.css'
const CharactersticsItem = (props) => {
  return (
    <div className='characterstic_item' >
      <p className='characterstic_item_title' >{props.title}</p>
      <p className='characterstic_item_context' >{props.context}</p>
    </div>
  )
}

export default CharactersticsItem
