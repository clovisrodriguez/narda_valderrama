import React, { useEffect, Fragment } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import CardList from '../components/CardList'
import Card from '../components/Card'
import Helmet from 'react-helmet'
import Container from '../components/Container'
import Pagination from '../components/Pagination'
import SEO from '../components/SEO'
import config from '../utils/siteConfig'
import Parallax from 'parallax-js'
import styled from 'styled-components'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import stars01 from '../images/stars01.png'
// import nebula01 from '../images/nebula01.png'
// import startdust01 from '../images/startdust01.png'
import startdust02 from '../images/startdust02.png'

const Index = ({ data, pageContext }) => {
  const posts = data.allContentfulPost.edges
  const featuredPost = posts[0].node
  const { currentPage } = pageContext
  const isFirstPage = currentPage === 1
  let scene = null
  // eslint-disable-next-line no-unused-vars
  let parallax = null

  useEffect(() => {
    parallax = new Parallax(scene)
  }, [])

  console.log(featuredPost)

  return (
    <Layout>
      <SEO />
      {!isFirstPage && (
        <Helmet>
          <title>{`${config.siteTitle} - Page ${currentPage}`}</title>
        </Helmet>
      )}
      <ul
        ref={el => (scene = el)}
        style={{ position: 'absolute', width: '100%' }}
      >
        <li data-depth="0.3">
          <img src={stars01} />
        </li>
        <li data-depth="0.2">
          <img
            src={startdust02}
            style={{ width: '900px', transform: 'translate(-50px, -50px)' }}
          />
        </li>
      </ul>
      <Container style={{ zIndex: 2 }}>
        {isFirstPage ? (
          <Fragment>
            <Carousel
              showStatus={false}
              showIndicators={false}
              showThumbs={false}
            >
              {posts.map(({ node: post }) => (
                <div key={post.id}>
                  <img
                    src={post.heroImage.fluid.src}
                    backgroundColor={'#eeeeee'}
                  />
                </div>
              ))}
            </Carousel>
            <CardList>
              {posts.slice(1).map(({ node: post }) => (
                <Card key={post.id} {...post} />
              ))}
            </CardList>
          </Fragment>
        ) : (
          <CardList>
            {posts.map(({ node: post }) => (
              <Card key={post.id} {...post} />
            ))}
          </CardList>
        )}
      </Container>
      <Pagination context={pageContext} />
    </Layout>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allContentfulPost(
      sort: { fields: [publishDate], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          title
          id
          slug
          publishDate(formatString: "MMMM DD, YYYY")
          heroImage {
            title
            fluid(maxWidth: 1800) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
          body {
            childMarkdownRemark {
              timeToRead
              html
              excerpt(pruneLength: 80)
            }
          }
        }
      }
    }
  }
`

export default Index
