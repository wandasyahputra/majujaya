import React from 'react'
import Layout from '../../components/layout'
import { Container, Row, Col } from 'react-bootstrap'
import InputSearch from '../../atomic/inputSearch'
import { Router } from '../../routes'
import { Icon } from '@iconify/react'
import heartIcon from '@iconify/icons-ion/heart'
import CategoryHorizontal from '../../widget/home/categoryHorizontal'
import PopularProduct from '../../widget/home/popularProduct'

const HomePage = () => (
  <Layout
    pageTitle="Home"
  >
    <Container>
      <Row className="align-items-center">
        <Col xs={1} className="p-2">
          <a href="#" className="color-primary" onClick={(e) => {
            e.preventDefault()
          }}>
            <Icon icon={heartIcon} width="32"/>
          </a>
        </Col>
        <Col>
          <InputSearch
            onClick={ () => Router.pushRoute('search')}
            disabled={true}
          />
        </Col>
      </Row>
      <Row>
        <CategoryHorizontal />
        <PopularProduct />
      </Row>
    </Container>
  </Layout>
)

export default HomePage
