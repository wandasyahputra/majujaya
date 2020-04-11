import React from 'react'
import { Button as BootstrapBtn } from 'react-bootstrap'
import PropTypes from 'prop-types'

const propTypes = {
  variant: PropTypes.oneOf(['primary', 'danger', 'borderless', 'outline', 'nostyle']),
  size: PropTypes.oneOf(['sm', 'lg']),
  block: PropTypes.bool,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.any
}

const defaultProps = {
  variant: 'primary',
  size: null,
  block: false,
  disabled: false,
  onClick: () => null
}

const Button = (props) => {
  return (
    <BootstrapBtn
      variant={props.variant}
      size={props.size}
      block={props.block}
      disabled={props.disabled}
      className={props.className}
      onClick={(e) => { props.onClick(e) }}
    >
      {
        props.loading ? (
          <React.Fragment>
            {'Loading...'}
          </React.Fragment>
        ) : props.children
      }
    </BootstrapBtn>
  )
}

Button.propTypes = propTypes

Button.defaultProps = defaultProps

export default Button
