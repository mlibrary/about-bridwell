import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {graphql, Link} from "gatsby"

import BookList from "../components/books/bookList"
import Tagline from "../components/tagline"
import CallToAction from "../components/callToAction"

export const IndexQuery = graphql`
query {
  home: markdownRemark(frontmatter: { templateKey: { eq: "home-page" } }) {
    frontmatter {
      taglineSection {
        text
      }
      callToActionSection {
        description
        buttonUrl
        buttonLabel
      }
    }
  }
  books: allMarkdownRemark (
    filter: {
      frontmatter: { templateKey: { eq: "book" } }
    },
    sort: {
      fields: frontmatter___orderOnPage,
      order: ASC
    }
  ) {
    edges {
      node {
        fields {
          cover
        }
        id
        frontmatter {
          title
          author
          description
          readLink
          buyLink
          orderOnPage
        }
      }
    }
  }
}
`

const IndexPage = ({data}) => {
  const tagline = data.home.frontmatter.taglineSection
  const callToAction = data.home.frontmatter.callToActionSection
  const books = data.books.edges

  return (
    <Layout>
      <SEO title="Home" />
        <section className="books-container container">
          <BookList books={books} />
          <div className="row mt-4">
            <div className="col-md-12">
              <p className="text-right">
                <a href="https://fulcrum.org/bridwell">Discover more books...</a>
              </p>
            </div>
          </div>
        </section>
        <section className="tagline-catalog-container">
          <div className="container">
            <div className="row">
              <div className="tagline-container col-md-8">
                <Tagline text={tagline.text} />
              </div>
              <div className="col-md-2 offset-md-2">
                <CallToAction callToAction={callToAction} />
              </div>
            </div>
          </div>
        </section>    
    </Layout>
  )
}

export default IndexPage