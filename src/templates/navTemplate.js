import React from 'react';

export default function Template({
  data,
}) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <div>
    <div className="nav-post-container">
      <div className="nav-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="nav-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
     </div>
     </div>
  );
}

export const pageQuery = graphql`
  query NavPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;