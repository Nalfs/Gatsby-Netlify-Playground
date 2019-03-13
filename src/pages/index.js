import React from "react"
import { graphql } from "gatsby"
import PostLink from "../components/post-link"
import { Link } from "gatsby"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return <div>
            <div className="header">
                <div className="knockout"><a href="http://mksht.crisnoble.com" rel="Like cool shit? visit my site">gatsby filth</a></div>

            </div>
            <div className="topnav">
                <Link className="active" to="/">Home</Link>
                <a href="#news">News</a>
                <Link to="/contactForm/">Contact</Link>
                <a href="#about">About</a>
            </div>

            <h1>Blog Portal: Power Ranges unite!</h1>
               {Posts}
            </div>
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`