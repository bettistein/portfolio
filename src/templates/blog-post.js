import React from "react";
import Helmet from "react-helmet";
import get from "lodash/get";
import find from "lodash/find";
import last from "lodash/last";
import first from "lodash/first";
import Link from "gatsby-link";

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

    // defines the blogpost
    return (
      <div
        style={{
          maxWidth: 650,
          margin: "0 auto",
          padding: `1.25rem 1rem`
        }}
      >
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <h1>{post.frontmatter.title}</h1>
        <p
          style={{
            display: "block"
          }}
        >
          {post.frontmatter.date}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr style={{}} />
        <div>
          <Link to={prevPage}> Previous </Link>
          <Link to={nextPage}> Next </Link>
        </div>
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
