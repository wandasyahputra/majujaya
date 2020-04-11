import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionsCreator } from '../../redux/action/index'
import { Row, Col, Container } from 'react-bootstrap'
import InputSearch from '../../atomic/inputSearch'
import { Icon } from '@iconify/react'
import arrowBackSharp from '@iconify/icons-ion/arrow-back-sharp'
import { useRouter } from 'next/router'

const SearchWidget = (props) => {
  console.log(props)
  useEffect(() => {
    if (!props.productReducer.loaded && !props.productReducer.loading && !props.productReducer.error) {
      props.callProduct()
    }
  }, [])
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
          <InputSearch
            placeholder="Nintendo Switch"
          />
        </Col>
      </Row>
      <Container>
        <Row className="d-flex mt-2" style={{ borderBottom: '1px solid #cecece' }}>
          <img
            style={{ borderRadius: 5, width: 50, height: 50, objectFit: 'cover' }}
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nintendo-switch-lite-0750-1570034031.jpg?crop=1.00xw:0.847xh;0,0.153xh&resize=768:*" />
          <div className="title ml-3">
            <h4 className="f-14 font-weight-bold">Nama Baju 1</h4>
            <p className="f-10">$500</p>
          </div>
        </Row>
        <Row className="d-flex mt-2" style={{ borderBottom: '1px solid #cecece' }}>
          <img
            style={{ borderRadius: 5, width: 50, height: 50, objectFit: 'cover' }}
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nintendo-switch-lite-0750-1570034031.jpg?crop=1.00xw:0.847xh;0,0.153xh&resize=768:*" />
          <div className="title ml-3">
            <h4 className="f-14 font-weight-bold">Nama Baju 1</h4>
            <p className="f-10">$500</p>
          </div>
        </Row>
        <Row className="d-flex mt-2" style={{ borderBottom: '1px solid #cecece' }}>
          <img
            style={{ borderRadius: 5, width: 50, height: 50, objectFit: 'cover' }}
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nintendo-switch-lite-0750-1570034031.jpg?crop=1.00xw:0.847xh;0,0.153xh&resize=768:*" />
          <div className="title ml-3">
            <h4 className="f-14 font-weight-bold">Nama Baju 1</h4>
            <p className="f-10">$500</p>
          </div>
        </Row>
        <Row className="d-flex mt-2" style={{ borderBottom: '1px solid #cecece' }}>
          <img
            style={{ borderRadius: 5, width: 50, height: 50, objectFit: 'cover' }}
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nintendo-switch-lite-0750-1570034031.jpg?crop=1.00xw:0.847xh;0,0.153xh&resize=768:*" />
          <div className="title ml-3">
            <h4 className="f-14 font-weight-bold">Nama Baju 1</h4>
            <p className="f-10">$500</p>
          </div>
        </Row>
        <Row className="d-flex mt-2" style={{ borderBottom: '1px solid #cecece' }}>
          <img
            style={{ borderRadius: 5, width: 50, height: 50, objectFit: 'cover' }}
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nintendo-switch-lite-0750-1570034031.jpg?crop=1.00xw:0.847xh;0,0.153xh&resize=768:*" />
          <div className="title ml-3">
            <h4 className="f-14 font-weight-bold">Nama Baju 1</h4>
            <p className="f-10">$500</p>
          </div>
        </Row>
        <Row className="d-flex mt-2" style={{ borderBottom: '1px solid #cecece' }}>
          <img
            style={{ borderRadius: 5, width: 50, height: 50, objectFit: 'cover' }}
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nintendo-switch-lite-0750-1570034031.jpg?crop=1.00xw:0.847xh;0,0.153xh&resize=768:*" />
          <div className="title ml-3">
            <h4 className="f-14 font-weight-bold">Nama Baju 1</h4>
            <p className="f-10">$500</p>
          </div>
        </Row>
      </Container>
    </React.Fragment>

  )
}

const mapStateToProps = state => ({
  productReducer: state.productReducer
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators(ActionsCreator, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchWidget)
