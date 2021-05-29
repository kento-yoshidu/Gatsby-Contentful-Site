import React from "react"
import Img from "gatsby-image"

export default props => {
  const title = props.title
  const fluid = props.fluid

  return (
    <section className="hero">
      <div class="wrapper">
        <figure>
          <Img
            fluid={fluid}
            alt=""
            style={{ height: "100%"}}
          />
        </figure>

        <div className="site-title-wrapper">
          <h1>
            GatsbyCafeSite
          </h1>
          <p>Gatsbyを使用して作られたカフェのWebサイトです。</p>
        </div>
      </div>
    </section>
  )
}