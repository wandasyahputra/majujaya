import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  name: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.string
}

const defaultProps = {
  onChange: () => null,
  className: ''
}

const Checkbox = (props) => {
  const [checked, setChecked] = useState(false)
  useEffect(() => {
    setChecked(props.checked || false)
  }, [props.checked])
  const handleChecked = () => {
    // props.check(!checked)
    setChecked(!checked)
    props.onChange(props.value)
  }
  return (
    <div className={`radio-check check ${props.className}`}>
      <input type="checkbox" id={props.id} name={props.name} checked={checked} onChange={() => handleChecked()}/>
      <label htmlFor={props.id} className="check-label">
        <span>
          {props.label}
        </span>
      </label>
    </div>
  )
}

Checkbox.propTypes = propTypes

Checkbox.defaultProps = defaultProps

export default Checkbox
