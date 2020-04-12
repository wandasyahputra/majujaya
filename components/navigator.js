import React from 'react'
import { Router } from '../routes'
import { Icon } from '@iconify/react'
import heartIcon from '@iconify/icons-ion/heart'
import homeIcon from '@iconify/icons-ion/home'
import cartIcon from '@iconify/icons-ion/cart'
import personIcon from '@iconify/icons-ion/person'

const propTypes = {
}

const defaultProps = {
  imageUrl: '',
  title: '',
  price: '',
  id: ''
}

const Navigator = () => {
  return (
    <div className="navigator">
      <a onClick={(e) => e.preventDefault()}>
        <Icon icon={homeIcon} width="32"/>
      </a>
      <a onClick={() => Router.push('feed')}>
        <Icon icon={heartIcon} width="32"/>
      </a>
      <a onClick={(e) => e.preventDefault()}>
        <Icon icon={cartIcon} width="32"/>
      </a>
      <a onClick={() => Router.push('purchasehistory')}>
        <Icon icon={personIcon} width="32"/>
      </a>
    </div>
  )
}

Navigator.propTypes = propTypes

Navigator.defaultProps = defaultProps

export default Navigator
