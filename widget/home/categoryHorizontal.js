import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionsCreator } from '../../redux/action/index'
// import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import HorizontalScroll from '../../atomic/horizontalScroll'
import { Card } from 'react-bootstrap'

const propTypes = {
  callProduct: PropTypes.func,
  loading: PropTypes.bool,
  loaded: PropTypes.bool,
  error: PropTypes.bool,
  categoryReducer: PropTypes.object
}

const defaultProps = {
  callProduct: () => null,
  loading: false,
  loaded: false,
  error: false,
  categoryReducer: {}
}

const CategoryHorizontal = (props) => {
  useEffect(() => {
    if (!props.loading && !props.loaded && !props.error) {
      props.callProduct()
    }
  }, [])
  return (
    <React.Fragment>
      <HorizontalScroll>
        {
          props.loaded &&
          props.categoryReducer !== null ? (
              props.categoryReducer.map((item, key) =>
                <div key={key} className="categoryItem withShadow m-1" >
                  <Card className="p-1 card-borderless overflow-hidden">
                    <img src={item.imageUrl} />
                    {item.name}
                  </Card>
                </div>
              )) : null
        }

      </HorizontalScroll>
    </React.Fragment>

  )
}

CategoryHorizontal.propTypes = propTypes

CategoryHorizontal.defaultProps = defaultProps

const mapStateToProps = state => ({
  categoryReducer: state.ProductReducer.data.category,
  loading: state.ProductReducer.loading,
  loaded: state.ProductReducer.loaded,
  error: state.ProductReducer.error
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators(ActionsCreator, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryHorizontal)
