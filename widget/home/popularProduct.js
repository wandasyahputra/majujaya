import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionsCreator } from '../../redux/action/index'
// import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import { Card } from 'react-bootstrap'
import { Link } from '../../routes'
import { Icon } from '@iconify/react'
import heartIcon from '@iconify/icons-ion/heart'
import heartOutline from '@iconify/icons-ion/heart-outline'

const propTypes = {
  callProduct: PropTypes.func,
  loading: PropTypes.bool,
  loaded: PropTypes.bool,
  error: PropTypes.bool,
  productReducer: PropTypes.object
}

const defaultProps = {
  callProduct: () => null,
  loading: false,
  loaded: false,
  error: false,
  productReducer: {}
}

const PopularProduct = (props) => {
  useEffect(() => {
    if (!props.loading && !props.loaded && !props.error) {
      props.callProduct()
    }
  }, [])
  return (
    <React.Fragment>
      {
        props.loaded &&
        props.productReducer !== null ? (
            props.productReducer.map((item, key) =>
              <Link key={key} route={`/product/${item.id}`}>
                <Card className="productBigItem overflow-hidden mt-3 card-borderless withShadow" >
                  <img src={item.imageUrl} />
                  {item.loved ? (
                    <Icon icon={heartIcon} width="32" className="love text-danger"/>
                  ) : (<Icon icon={heartOutline} width="32" className="love text-primary"/>)
                  }
                  <h4 className="f-12 m-2 mt-4">{item.title}</h4>
                </Card>
              </Link>
            )) : null
      }
    </React.Fragment>

  )
}

PopularProduct.propTypes = propTypes

PopularProduct.defaultProps = defaultProps

const mapStateToProps = state => ({
  productReducer: state.ProductReducer.data.product,
  loading: state.ProductReducer.loading,
  loaded: state.ProductReducer.loaded,
  error: state.ProductReducer.error
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators(ActionsCreator, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PopularProduct)
