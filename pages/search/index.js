import React from 'react'
import Layout from '../../components/layout'
import SearchWidget from '../../widget/search/searchWidget'
import { Container } from 'react-bootstrap'

const SearchPage = () => (
  <Layout
    pageTitle="Search"
  >
    <Container>
      <SearchWidget />
    </Container>
  </Layout>
)

export default SearchPage
