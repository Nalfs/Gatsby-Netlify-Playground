import React from 'react';

export default function Template({
  data,
}) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <div>
      <div class="header">
                  <div class="knockout"><a href="http://mksht.crisnoble.com" rel="Like cool shit? visit my site">gatsby filth</a></div>

              </div>
              <div class="topnav">
                  <a class="active" href="#home">Home</a>
                  <a href="#news">News</a>
                  <a href="#contact">Contact</a>
                  <a href="#about">About</a>
              </div>
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
     </div>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
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