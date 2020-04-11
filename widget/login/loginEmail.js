import React, { useState } from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import Button from '../../atomic/button'
import TextField from '../../atomic/textField'
import { Router } from '../../routes'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionsCreator } from '../../redux/action/index'
import PropTypes from 'prop-types'
import Checkbox from '../../atomic/checkbox'

const propTypes = {
  setLogin: PropTypes.func
}

const defaultProps = {
  setLogin: () => null
}

const LoginEmail = (props) => {
  const [login, setLogin] = useState(
    {
      email: null,
      pass: null,
      rememberme: false
    }
  )
  const [error, setError] = useState({})
  const [loading, setLoading] = useState(false)
  const validation = () => {
    const emailRegex = RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i)
    const err = {}
    if (!login.email) {
      err.email = 'Can\'t be empty'
    } else if (!emailRegex.test(login.email)) {
      err.email = 'Email is not valid'
    } else delete err.email
    if (!login.pass) {
      err.pass = 'Can\'t be empty'
    } else delete err.pass
    setError(err)
    if (Object.entries(err).length === 0) {
      submitLogin()
    } else {
      setError(err)
    }
  }
  const submitLogin = () => {
    setLoading(true)
    // just make it more dramatic
    setTimeout(() => {
      const data = {
        logedin: true
      }
      props.setLogin(data)
      Router.pushRoute('/')
    }, 2000)
  }
  return (
    <Card className="widget-email-login card-borderless shadow">
      <Card.Body>
        <Row>
          <Col xs={12}>
            <p className="f-bold mb-4">
              {'Login'}
            </p>
          </Col>
          <Col xs={12}>
            <TextField
              label="Email"
              type="email"
              id="loginEmail"
              invalid={Object.entries(error).length && error.email ? error.email : null}
              onChange={(val) => {
                setLogin(
                  {
                    ...login,
                    email: val
                  }
                )
              }}
            />
          </Col>
          <Col xs={12}>
            <TextField
              label="Kata Sandi"
              type="password"
              id="loginPass"
              invalid={Object.entries(error).length && error.pass ? error.pass : null}
              onChange={(val) => {
                setLogin(
                  {
                    ...login,
                    pass: val
                  }
                )
              }}
            />
          </Col>
          <Col xs={12} className="text-right d-flex justify-content-between">
            <Checkbox
              checked={true}
              className="mt-2"
              label="Remember me"
            />
            <Button
              variant="primary"
              className="f-extrabold pb-2 pl-3 pr-3 pt-2"
              onClick={() => validation()}
              loading={loading}
              disabled={loading}
            >
              {'Sign In'}
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

LoginEmail.propTypes = propTypes

LoginEmail.defaultProps = defaultProps

const mapDispatchToProps = dispatch => {
  return bindActionCreators(ActionsCreator, dispatch)
}

export default connect(null, mapDispatchToProps)(LoginEmail)
