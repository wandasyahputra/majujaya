import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionsCreator } from '../../redux/action/index'
import { Row, Col, Container } from 'react-bootstrap'
import { Icon } from '@iconify/react'
import arrowBackSharp from '@iconify/icons-ion/arrow-back-sharp'
import { useRouter } from 'next/router'
import ItemProductSmall from '../../components/itemProductSmall'
import PropTypes from 'prop-types'

const propTypes = {
  callProduct: PropTypes.func,
  loading: PropTypes.bool,
  loaded: PropTypes.bool,
  error: PropTypes.bool,
  PurchaseReducer: PropTypes.array
}

const defaultProps = {
  loading: false,
  loaded: false,
  error: false,
  PurchaseReducer: {}
}

const PurchaseWidget = (props) => {
  const router = useRouter()
  return (
    <React.Fragment>
      <Row className="align-items-center">
        <Col xs={1} className="p-2">
          <a href="#" className="color-primary" onClick={(e) => {
            e.preventDefault()
            router.back()
          }}>
            <Icon icon={arrowBackSharp} width="24"/>
          </a>
        </Col>
        <Col>
          <h3 className="f-20 font-weight-bold mb-0">Purchase History</h3>
        </Col>
      </Row>
      <Container>
        { props.PurchaseReducer !== null ? props.PurchaseReducer.map((item, key) => (
          <ItemProductSmall
            imageUrl={item.imageUrl}
            title={item.title}
            price={item.price}
            id={item.id}
            key={key}
          />
        )) : null}
      </Container>
    </React.Fragment>

  )
}

PurchaseWidget.propTypes = propTypes

PurchaseWidget.defaultProps = defaultProps

const mapStateToProps = state => ({
  PurchaseReducer: state.PurchaseReducer.data
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators(ActionsCreator, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseWidget)
