
// The Blog-Masonry

import React from "react";
import Link from "gatsby-link";
import get from "lodash/get";
import Img from "gatsby-image";

import Bio from "../components/Bio";
import Footer from "../components/footer"

import style from "./index.module.scss";



class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const posts = get(this, "props.data.allMarkdownRemark.edges");

    return (
      <div className={style.bg}>

        <Bio />
        <div className={style.divider}> Work </div>
        <div className={style.masonry}>
          {posts.map(({ node }) => {
            const title = get(node, "frontmatter.title") || node.fields.slug;
            const imageSharp = get(
              node,
              "frontmatter.featuredImage.childImageSharp"
            );
            console.log(imageSharp);
            return (
              <div className={style.box} key={node.fields.slug}>
                {imageSharp != null ?
                  <Img sizes={imageSharp.sizes} /> : null}
                  <div className={style.textbox}>
                <h3>  <Link className={style.headline}to={node.fields.slug}>{title}</Link>
                </h3>

                <small>{node.frontmatter.date}</small>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                </div>
              </div>
            );
          })}

        </div>
        <Footer />
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
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 530) {
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
