import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { createUseStyles } from 'react-jss'
import { StaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import theme from '../styles/theme'

const useStyles = createUseStyles({
  carousel: {
    marginBottom: '2em',
    '&:hover div': {
      opacity: 1,
    },
  },

  pointer: {
    cursor: 'pointer',
  },

  description: {
    position: 'absolute',
    padding: '1.3em 3em',
    color: theme.colors.secondary,
    bottom: 0,
    width: '100%',
    background: 'rgba(0,0,0,0.6)',
    transition: 'opacity 1s',
    opacity: 0,

    '& h2': {
      fontSize: '2em',
      fontWeight: 'bold',
      marginBottom: '0.6em',
    },
  },
})

const Description = props => (
  <div className={props.className}>
    <h2>{props.banner.title}</h2>
    <p>{props.banner.alt}</p>
  </div>
)

const CarouselComponent = props => {
  const classes = useStyles()
  return (
    <StaticQuery
      query={graphql`
        query BannerQuery {
          allContentfulBanner {
            edges {
              node {
                title
                image {
                  fluid(maxWidth: 1800) {
                    ...GatsbyContentfulFluid_withWebp_noBase64
                  }
                }
                alt
                action
                external
                hasSlug
              }
            }
          }
        }
      `}
      render={data => {
        const banners = data.allContentfulBanner.edges
        const className = classes.description

        return (
          <Carousel
            autoPlay
            interval={4000}
            className={classes.carousel}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
          >
            {banners.map(({ node: banner }, i) =>
              banner.hasSlug ? (
                banner.external ? (
                  <a key={i} href={banner.action} target="blank">
                    <div>
                      <Img
                        fluid={banner.image.fluid}
                        alt={banner.alt}
                        title={banner.title}
                      />
                      <Description {...{ banner, className }} />
                    </div>
                  </a>
                ) : (
                  <Link key={i} to={banner.action}>
                    <div>
                      <Img
                        fluid={banner.image.fluid}
                        alt={banner.alt}
                        title={banner.title}
                      />
                      <Description {...{ banner, className }} />
                    </div>
                  </Link>
                )
              ) : (
                <div key={i}>
                  <Img
                    fluid={banner.image.fluid}
                    alt={banner.alt}
                    title={banner.title}
                  />
                  <Description {...{ banner, className }} />
                </div>
              )
            )}
          </Carousel>
        )
      }}
    />
  )
}

export default CarouselComponent
