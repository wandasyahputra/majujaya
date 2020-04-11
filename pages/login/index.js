import React from 'react'
import Layout from '../../components/layout'
import LoginEmail from '../../widget/login/loginEmail'
import LoginOther from '../../widget/login/loginOther'
import { Container } from 'react-bootstrap'
import logo from '../../assets/images/logo.jpg'

const LoginPage = () => (
  <Layout
    pageTitle="Login"
  >
    <Container>
      <div className="text-center">
        <img src={logo} style={{ width: 150 }} className="pt-5 pb-3" />
      </div>
      <LoginEmail />
      <LoginOther />
    </Container>
  </Layout>
)

export default LoginPage
