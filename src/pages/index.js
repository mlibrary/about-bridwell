import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Link is commented out for now, but will need to be activated later
// import {graphql, Link} from "gatsby"

import BookList from "../components/books/bookList"
import Tagline from "../components/tagline"
import Newsletter from "../components/newsletter"
// import Fundraiser from "../components/fundraiser"
// import NewsList from "../components/news/newsList"
// import EventList from "../components/events/eventList"
// import MapImage from "../components/mapImage"
// import CommunityImage from "../components/communityImage"
import Catalog from "../components/catalog"

export const IndexQuery = graphql`
query {
  home: markdownRemark(frontmatter: { templateKey: { eq: "home-page" } }) {
    frontmatter {
      taglineSection {
        text
      }
      newsletterSection {
        heading
        description
        url
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
  // const newsletter = data.home.frontmatter.newsletterSection
  // const fundraiser = data.home.frontmatter.fundraiserSection
  // const map = data.home.frontmatter.mapSection
  // const catalog = data.home.frontmatter.catalogSection
  const books = data.books.edges
  // const news = data.news.edges
  // const events = data.events.edges

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
                      <p className="text-white">Interested in publishing your next book with us?</p>
                      <a className="btn btn-primary" href="/authors">Learn more</a>
              </div>
            </div>
          </div>
        </section>    
    </Layout>
  )
}

export default IndexPage