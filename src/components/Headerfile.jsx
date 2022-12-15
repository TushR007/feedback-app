import React from 'react'
import PropTypes from 'prop-types'

function Header({ text,bgcolor,textcolor }) {
    const stylesheet = {
        backgroundColor: bgcolor,
        color: textcolor
    }
  return (
    <header style={stylesheet}>
        <div className="container">
            <h2>{text}</h2>
        </div>
    </header>
    
  )
}

Header.defaultProps = {
    text: 'FeedBack UI',
    bgcolor: '#2b2d42',
    textcolor: '#d62828'
}

Header.propTypes = {
    text: PropTypes.string,
    bgcolor: PropTypes.string,
    textcolor: PropTypes.string
}

export default Header