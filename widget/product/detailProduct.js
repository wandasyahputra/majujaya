import React, { useEffect, useState, useRef } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { Icon } from '@iconify/react'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'
import { urlMiner } from '../../utils/urlMiner'
import { bindActionCreators } from 'redux'
import { ActionsCreator } from '../../redux/action/index'
import heartIcon from '@iconify/icons-ion/heart'
import heartOutline from '@iconify/icons-ion/heart-outline'
import arrowBackSharp from '@iconify/icons-ion/arrow-back-sharp'
import shareSocial from '@iconify/icons-ion/share-social'
import cartIcon from '@iconify/icons-ion/cart'
import PropTypes from 'prop-types'
import Button from '../../atomic/button'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const propTypes = {
  callProduct: PropTypes.func,
  setPurchase: PropTypes.func,
  toggleLove: PropTypes.func,
  loading: PropTypes.bool,
  loaded: PropTypes.bool,
  error: PropTypes.bool,
  productReducer: PropTypes.array
}

const defaultProps = {
  callProduct: () => null,
  setPurchase: () => null,
  toggleLove: () => null,
  loading: false,
  loaded: false,
  error: false,
  productReducer: {}
}

const ProductDetail = (props) => {
  const router = useRouter()
  const [productItem, setProductItem] = useState({})
  const [url, setUrl] = useState('')
  const shareSocialRef = useRef(null)
  useEffect(() => {
    if (!props.loading && !props.loaded && !props.error) {
      props.callProduct()
    }
    shareSocialRef.current.addEventListener('click', event => {
      if (navigator.share) {
        navigator.share({
          title: 'MajuJaya Online Store',
          url: url
        }).then(() => {
          console.log('Thanks for sharing!')
        })
          .catch(console.error)
      } else {
        setUrl(window.location.href)
        console.log('share only available on mobile or safari browser for desktop')
        alert('Link copied to clipboard')
      }
    })
  }, [])
  useEffect(() => {
    if (props.loaded) {
      const id = urlMiner(2, router.asPath)
      for (let i = 0; i < props.productReducer.length; i++) {
        if (props.productReducer[i].id === id) {
          return setProductItem(props.productReducer[i])
        }
      }
    }
  }, [props.loaded])
  const toggleLove = (id) => () => {
    props.toggleLove(id)
  }

  const setPurchase = (data) => () => {
    props.setPurchase(data)
    alert('Purchasing success, Thank you for purchasing our product!')
  }
  return (
    <div className="position-relative product-detail">
      <Row className="d-flex justify-content-between w-100 align-items-center position-absolute">
        <Col xs={1} className="p-2">
          <a href="#" className="color-primary" onClick={(e) => {
            e.preventDefault()
            router.back()
          }}>
            <Icon icon={arrowBackSharp} width="24"/>
          </a>
        </Col>
        <Col xs={1}>
          <CopyToClipboard
            text={url}>
            <a href="#" className="color-primary" ref={shareSocialRef} onClick={(e) => {
              e.preventDefault()
            }}>
              <Icon icon={shareSocial} width="24"/>
            </a>
          </CopyToClipboard>
        </Col>
      </Row>
      {productItem ? (
        <Row>
          <img src={productItem.imageUrl} className="w-100" />
          <Container>
            <Col xs={12} className="align-items-center text-right d-flex justify-content-between">
              <h2 className="f-16 font-weight-bold">{productItem.title}</h2>
              {productItem.loved ? (
                <Icon icon={heartIcon} width="32" onClick={toggleLove(productItem.id)} className="love text-danger"/>
              ) : (<Icon icon={heartOutline} width="32" onClick={toggleLove(productItem.id)} className="love text-primary"/>)
              }
            </Col>
            <p className="f-14 text-justify">{productItem.description}</p>
          </Container>
          <Col className="text-right mb-4">
            <Button
              variant="primary"
              className="font-weight-bold pt-2 pb-2"
              onClick={setPurchase(productItem)}
            >
              <Icon icon={cartIcon} width="24" className="mr-2"/>
              Buy
            </Button>
          </Col>
        </Row>
      ) : null}
    </div>
  )
}

ProductDetail.propTypes = propTypes

ProductDetail.defaultProps = defaultProps

const mapStateToProps = state => ({
  productReducer: state.ProductReducer.data.product,
  loading: state.ProductReducer.loading,
  loaded: state.ProductReducer.loaded,
  error: state.ProductReducer.error
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators(ActionsCreator, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail)
