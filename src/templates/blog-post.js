import React from "react";
import Helmet from "react-helmet";
import get from "lodash/get";
import find from "lodash/find";
import last from "lodash/last";
import first from "lodash/first";
import Link from "gatsby-link";
import style from "./blog-post.module.scss";
import Footer from "../components/footer"


const getNextPage = (edges, slug) => {
  const currentEdge = find(edges, edge => {
    return edge.node.fields.slug === slug;
  });
  const { next } = currentEdge;

  if (next == null) {
    return first(edges).node.fields.slug;
  }

  return next.fields.slug;
};

const getPrevPage = (edges, slug) => {
  const currentEdge = find(edges, edge => {
    return edge.node.fields.slug === slug;
  });
  const { previous } = currentEdge;

  if (previous == null) {
    return last(edges).node.fields.slug;
  }

  return previous.fields.slug;
};

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.currentBlog;
    const allBlogEdges = this.props.data.allBlogs.edges;
    const slug = get(this.props, "data.currentBlog.fields.slug");

    const siteTitle = get(this.props, "data.site.siteMetadata.title");

    const nextPage = getNextPage(allBlogEdges, slug);
    const prevPage = getPrevPage(allBlogEdges, slug);


    /*......................
    // THE BLOGPOST html
    /.......................*/

    return (
    <div>
      <div className={style.container}>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <h1>{post.frontmatter.title}</h1>
        <p style={{display: "block"}}>
          {post.frontmatter.date}
        </p>

        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr/>


        </div>
        <div className={style.navbox}>
        <div className={style.textbox}>
          <Link className={style.prev} to={prevPage}> PREVIOUS PROJECT </Link>
          <p className={style.work}> WORK </p>
          <Link className={style.next} to={nextPage}> NEXT PROJECT </Link>
          </div>
        </div>
          <Footer />
        </div>


    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    allBlogs: allMarkdownRemark {
      edges {
        previous {
          fields {
            slug
          }
        }
        node {
          fields {
            slug
          }
        }
        next {
          fields {
            slug
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        author
      }
    }
    currentBlog: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      fields {
        slug
      }
    }
  }
`;
