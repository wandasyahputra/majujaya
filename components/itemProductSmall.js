import React from 'react'
import PropTypes from 'prop-types'
import { Row } from 'react-bootstrap'
import { Link } from '../routes'
const propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
  id: PropTypes.string
}

const defaultProps = {
  imageUrl: '',
  title: '',
  price: '',
  id: ''
}

const ItemProductSmall = (props) => {
  return (
    <Link route={`/product/${props.id}`}>
      <Row className="d-flex mt-2" style={{ borderBottom: '1px solid #cecece' }}>
        <img
          style={{ borderRadius: 5, width: 50, height: 50, objectFit: 'cover' }}
          src={props.imageUrl} />
        <div className="title ml-3">
          <h4 className="f-14 font-weight-bold">{props.title}</h4>
          <p className="f-10">{props.price}</p>
        </div>
      </Row>
    </Link>
  )
}

ItemProductSmall.propTypes = propTypes

ItemProductSmall.defaultProps = defaultProps

export default ItemProductSmall
