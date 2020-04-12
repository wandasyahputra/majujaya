import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Icon } from '@iconify/react'
import eyeOutline from '@iconify/icons-ion/eye-outline'
import eyeOffOutline from '@iconify/icons-ion/eye-off-outline'
import alertCircle from '@iconify/icons-ion/alert-circle'

const propTypes = {
  id: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'password', 'number', 'ipk']),
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  invalid: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  innerLabel: PropTypes.string,
  withComma: PropTypes.bool

}

const defaultProps = {
  type: 'text',
  className: '',
  innerLabel: '',
  withComma: false,
  value: ''
}

const TextField = (props) => {
  const [value, setValue] = useState(props.value)
  const [isPass, setIsPass] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    if (props.type === 'password') {
      setIsPass(true)
    }
  }, [props.type])

  useEffect(() => {
    setValue(props.value)
  }, [props.value])

  const handleChange = (e) => {
    if (props.type === 'number' && props.withComma) {
      const regex = /^[0-9][0-9 -]*$/
      let withoutComma = e.currentTarget.value
      withoutComma = e.currentTarget.value.toString().replace(/\./g, '')
      if (regex.test(parseFloat(withoutComma))) {
        const withComma = parseFloat(withoutComma).toLocaleString('id')
        props.onChange(withComma)
        return setValue(withComma)
      }
      return false
    }
    if (props.type === 'ipk') {
      // eslint-disable-next-line no-empty-character-class
      const regex = /^((\d{0,2}\.\d{0,2})|([1][0][0])|(\d{0,2}\.[])|(\d{0,2}))$/g
      if (!regex.test(e.currentTarget.value)) {
        return false
      }
    }
    setValue(e.currentTarget.value)
    props.onChange(e.currentTarget.value)
  }

  const handleHidden = () => {
    setHidden(!hidden)
  }

  return (
    <div className="form-group">
      <div className={'input-group ' + (props.invalid ? 'is-invalid ' : '') + props.className}>
        {
          props.innerLabel !== '' ? (
            <div className="input-group-prepend">
              <span className="input-group-text">
                {props.innerLabel}
              </span>
            </div>
            // <span className="pl-2 pt-2 pb-2 font-weight-bold">
            //   {props.innerLabel}
            // </span>
          ) : (
            null
          )
        }
        <div className="form-control position-static">
          <input
            id={props.id}
            type={!hidden ? props.type !== 'number' && !props.withComma ? props.type : 'text' : props.type !== 'password' ? props.type : 'text'}
            className={'w-100' + (value || props.innerLabel !== '' ? ' has-value' : '')}
            onChange={(e) => handleChange(e)}
            value={value}
          />
          <label className="form-label" htmlFor={props.id}>
            {props.label}
          </label>
        </div>
        {
          isPass ? (
            <div className="input-group-append">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  handleHidden()
                }}
              >
                {
                  hidden ? (
                    <Icon icon={eyeOffOutline} width="16px" height="16px"/>
                  ) : (
                    <Icon icon={eyeOutline} width="16px" height="16px"/>
                  )
                }
              </a>
            </div>
          ) : null
        }
      </div>
      {
        props.invalid ? (
          <div className="invalid-feedback d-block">
            <Icon icon={alertCircle} width="12" className="mr-1 align-text-top"/>
            {props.invalid}
          </div>
        ) : null
      }
    </div>
  )
}

TextField.propTypes = propTypes

TextField.defaultProps = defaultProps

export default TextField
