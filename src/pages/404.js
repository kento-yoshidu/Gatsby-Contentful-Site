import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"

export default ({ location }) => (
  <Layout>

    <SEO
      pagetitle="ページが見つかりません"
      pagepath={location.pathname}
    />

    <h1 style={{ padding: "20vh 0", textAlign: "center", color: "#888" }}>404 Page NOT FOUND</h1>
  </Layout>
)