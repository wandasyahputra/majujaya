import React, { useEffect } from 'react'
import { Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Router } from '../routes'
import Head from 'next/head'
import PropType from 'prop-types'

const propTypes = {
  logedin: PropType.bool,
  pageTitle: PropType.string,
  children: PropType.any
}

const defaultProps = {
  pageTitle: ''
}

const Layout = (props) => {
  useEffect(() => {
    if (props.pageTitle !== 'Login' && (!props.logedin || !localStorage.getItem('logedin'))) {
      Router.push('/login')
    }
  }, [props.pageTitle])
  return (
    <React.Fragment>
      <Head>
        <title>
          {'MajuJaya - ' + props.pageTitle}
        </title>
      </Head>
      <Col xs={12}>
        { props.children }
      </Col>
    </React.Fragment>
  )
}

Layout.propTypes = propTypes

Layout.defaultProps = defaultProps
const mapStateToProps = state => ({
  logedin: state.userDataReducer.data.logedin
})

export default connect(mapStateToProps)(Layout)
