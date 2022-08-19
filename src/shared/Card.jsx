import React from 'react'

function Card({ children,reverse }) {
  const divStyle = {
    backgroundColor:reverse ? 'rgba(0,0,0,0.4)': '#fff',
    color: reverse? '#fff' : '#000'
  }
  return (
    <div className='card' style = {divStyle}>{children}</div>
  )
}

export default Card

Card.defaultProps = {
    reverse:true
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool
}