import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionsCreator } from '../../redux/action/index'
import { Row, Col, Container } from 'react-bootstrap'
import InputSearch from '../../atomic/inputSearch'
import { Icon } from '@iconify/react'
import arrowBackSharp from '@iconify/icons-ion/arrow-back-sharp'
import { useRouter } from 'next/router'
import ItemProductSmall from '../../components/itemProductSmall'
import PropTypes from 'prop-types'

const propTypes = {
  callProduct: PropTypes.func,
  productReducer: PropTypes.object
}

const defaultProps = {
  callProduct: () => null,
  productReducer: {}
}

const SearchWidget = (props) => {
  const [searchValue, setSearchValue] = useState('')
  const router = useRouter()

  const handleChangeInput = (val) => {
    setSearchValue(val)
  }

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
            onChange={handleChangeInput}
          />
        </Col>
      </Row>
      <Container>
        {searchValue === '' ? 'Type something you want to search' : null }
        {/* {searchValue !== '' &&
          props.productReducer.loaded &&
          props.productReducer.data !== null &&
          props.productReducer.data[0] !== null &&
          props.productReducer.data[0].data.productPromo &&
          props.productReducer.data[0].data.productPromo !== null && ?} */}
        {searchValue !== '' ? props.productReducer.data.map((item, key) => {
          if (item.title.toLowerCase().includes(searchValue.toLowerCase())) {
            return (
              <ItemProductSmall
                imageUrl={item.imageUrl}
                title={item.title}
                price={item.price}
                id={item.id}
                key={key}
              />)
          } else {
            return false
          }
        }) : null}
      </Container>
    </React.Fragment>

  )
}

SearchWidget.propTypes = propTypes

SearchWidget.defaultProps = defaultProps

const mapStateToProps = state => ({
  productReducer: state.ProductReducer
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators(ActionsCreator, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchWidget)
