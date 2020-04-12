import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
}

const defaultProps = {
  className: ''
}

const HorizontalScroll = (props) => {
  return (
    <div className={`scrollContainer ${props.className}`}>
      {props.children}
    </div>
  )
}

HorizontalScroll.propTypes = propTypes

HorizontalScroll.defaultProps = defaultProps

export default HorizontalScroll
