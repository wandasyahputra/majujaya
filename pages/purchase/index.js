import React from 'react'
import Layout from '../../components/layout'
import PurchaseWidget from '../../widget/purchase/purchaseWidget'

const HomePage = () => (
  <Layout
    pageTitle="Purchase History"
  >
    <PurchaseWidget />
  </Layout>
)

export default HomePage
