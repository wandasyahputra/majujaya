import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Head from 'next/head'
import PropType from 'prop-types'

const propTypes = {
  pageTitle: PropType.string,
  navigation: PropType.bool,
  activeKey: PropType.string,
  children: PropType.any
}

const defaultProps = {
  pageTitle: '',
  navigation: true
}

const Layout = (props) => {
  return (
    <React.Fragment>
      <Head>
        <title>
          {'MajuJaya - ' + props.pageTitle}
        </title>
      </Head>
      <Row>
        <Col xs={12}>
          { props.children }
        </Col>
      </Row>
    </React.Fragment>
  )
}

Layout.propTypes = propTypes

Layout.defaultProps = defaultProps

export default Layout
