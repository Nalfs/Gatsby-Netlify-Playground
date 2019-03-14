import React from "react"
import Header from '../components/header'
import Footer from '../components/footer'
import Layout from "../components/layout"

export default () => (
  <div style={{ color: `teal` }}>
  <Header />
  <Layout>
    <h1>About Gatsby</h1>
    <p>Such wow. Very React.</p>
    <h1>View Form</h1>
    </Layout>
    <Footer />
  </div>
)