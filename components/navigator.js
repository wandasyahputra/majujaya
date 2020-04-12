import React from 'react'
import PropTypes from 'prop-types'
import { Row } from 'react-bootstrap'
import { Link } from '../routes'
import { Icon } from '@iconify/react'
import heartIcon from '@iconify/icons-ion/heart'
import homeIcon from '@iconify/icons-ion/home';
import cartIcon from '@iconify/icons-ion/cart';
import personIcon from '@iconify/icons-ion/person';

const propTypes = {
}

const defaultProps = {
  imageUrl: '',
  title: '',
  price: '',
  id: ''
}

const Navigator = (props) => {
  return (
    <div className="navigator">
      <div>
        <Icon icon={homeIcon} width="32"/>
      </div>
      <div>
        <Icon icon={heartIcon} width="32"/>
      </div>
      <div>
        <Icon icon={cartIcon} width="32"/>
      </div>
      <div>
        <Icon icon={personIcon} width="32"/>
      </div>

    </div>
  )
}

Navigator.propTypes = propTypes

Navigator.defaultProps = defaultProps

export default Navigator
