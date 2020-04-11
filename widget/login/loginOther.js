import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionsCreator } from '../../redux/action/index'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { GoogleLogin } from 'react-google-login'
import { Icon } from '@iconify/react'
import facebookF from '@iconify/icons-uil/facebook-f'
import logoGoogle from '@iconify/icons-ion/logo-google'
import { Container } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { Router } from '../../routes'

const propTypes = {
  setLogin: PropTypes.func
}

const defaultProps = {
  setLogin: () => null
}

const LoginEmail = (props) => {
  const responseFacebook = (response) => {
    const data = {
      name: response.name,
      picture: response.picture.data.url,
      logedin: true
    }
    props.setLogin(data)
    Router.pushRoute('/')
  }
  const responseGoogle = (response) => {
    const data = {
      name: response.profileObj.name,
      picture: response.profileObj.imageUrl,
      logedin: true
    }
    props.setLogin(data)
    Router.pushRoute('/')
  }

  return (
    <Container className="text-center mt-5 mb-4">
      <FacebookLogin
        appId="362510661302929"
        autoLoad={false}
        cssClass="my-facebook-button-class"
        fields="name,email,picture"
        render={renderProps => (
          <button variant="borderless" className="btn btn-block btn-primary pt-2 pb-2 pl-0 pr-0" onClick={renderProps.onClick}>
            <Icon icon={facebookF} /> {'Sign in with Facebook'}
          </button>
        )}
        callback={responseFacebook}
      />
      <GoogleLogin
        clientId={'1041285346418-mstlerfui9ts58gtchk8ihbavmvbdq9v.apps.googleusercontent.com'}
        onSuccess={responseGoogle}
        cookiePolicy={'single_host_origin'}
        render={renderProps => (
          <button variant="borderless" className="btn btn-block btn-brightSkyBlue pt-2 pb-2 pl-0 pr-0 " onClick={renderProps.onClick}>
            <Icon icon={logoGoogle} /> {'Sign in with Google'}
          </button>
        )}
      />
    </Container>
  )
}

LoginEmail.propTypes = propTypes

LoginEmail.defaultProps = defaultProps

const mapDispatchToProps = dispatch => {
  return bindActionCreators(ActionsCreator, dispatch)
}

export default connect(null, mapDispatchToProps)(LoginEmail)
