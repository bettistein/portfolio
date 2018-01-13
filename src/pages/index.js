import React from "react";
import Link from "gatsby-link";
import get from "lodash/get";
import Img from "gatsby-image";

import Bio from "../components/Bio";
import { rhythm } from "../utils/typography";

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const posts = get(this, "props.data.allMarkdownRemark.edges");

    return (
      <div>
        <Bio />
        <div
          style={{
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: 760,
            height: "100vw",
          }}
        >
          {posts.map(({ node }) => {
            const title = get(node, "frontmatter.title") || node.fields.slug;
            const imageSharp = get(
              node,
              "frontmatter.featuredImage.childImageSharp"
            );
            console.log(imageSharp);
            return (
              <div
                key={node.fields.slug}
                style={{
                  maxWidth: 340,
                  backgroundColor: "white",
                  marginTop: 30,
                  padding: 10
                }}
              >
                {imageSharp != null ? <Img sizes={imageSharp.sizes} /> : null}
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4)
                  }}
                >
                  <Link
                    style={{
                      boxShadow: "none",
                      color: "black"
                    }}
                    to={node.fields.slug}
                  >
                    {title}
                  </Link>
                </h3>

                <small>{node.frontmatter.date}</small>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
            );
          })}
        </div>
        <footer style={{ height: 50 }}> </footer>
      </div>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 630) {
                  base64
                  aspectRatio
                  src
                  srcSet
                  sizes
                }
              }
            }
          }
        }
      }
    }
  }
`;
