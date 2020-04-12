import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import searchOutline from '@iconify/icons-ion/search-outline'
import closeOutline from '@iconify/icons-ion/close-outline'
import PropTypes from 'prop-types'

const propTypes = {
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool
}

const defaultProps = {
  onChange: () => null,
  onClick: () => null,
  placeholder: '',
  disabled: false
}

const InputSearch = (props) => {
  const [value, setValue] = useState('')
  const handleChange = (val) => {
    setValue(val)
    props.onChange(val)
  }
  return (
    <div className="form-group w-100 my-3">
      <div className="input-group input-group-search" onClick={props.onClick}>
        <div className="input-group-prepend">
          <Icon icon={searchOutline} width="15" className="color-primary"/>
        </div>
        <input type="text" className="form-control" disabled={props.disabled} value={value} placeholder={props.placeholder} onChange={(e) => handleChange(e.target.value)}/>
        {
          value ? (
            <div className="input-group-append" onClick={(e) => {
              e.preventDefault()
              handleChange('')
            }}>
              <Icon icon={closeOutline} width="15"/>
            </div>
          ) : null
        }
      </div>
    </div>
  )
}

InputSearch.propTypes = propTypes

InputSearch.defaultProps = defaultProps

export default InputSearch
