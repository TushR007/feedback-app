import PropTypes from 'prop-types'

function Button({ children,version,type,isDisabled }) {
  return (
    <button type={ type } disabled={ isDisabled } className={`btn btn-${version}`}>
        {children}
    </button>
  )
}

Button.defaultProps = {
    isDisabled: false,
    type: 'button',
    version: 'primary'
}

Button.propTypes = {
    isDisabled: PropTypes.bool.isRequired,
    type: PropTypes.string,
    version: PropTypes.string,
    children: PropTypes.node.isRequired
}

export default Button