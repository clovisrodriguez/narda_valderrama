import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Container from '../components/Container'
import PageBody from '../components/PageBody'
import TagList from '../components/TagList'
import PostLinks from '../components/PostLinks'
import PostDetails from '../components/PostDetails'
import SEO from '../components/SEO'
import {
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  PinterestShareButton,
} from 'react-share'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faTwitter,
  faTelegram,
  faWhatsapp,
  faPinterest,
} from '@fortawesome/free-brands-svg-icons'
import { createUseStyles } from 'react-jss'
import theme from '../styles/theme'

const useStyles = createUseStyles({
  shareContainer: {
    display: 'flex',
    color: theme.colors.secondary,
    margin: '1em',
    justifyContent: 'center',

    '& svg': {
      fontSize: '2em',
      marginLeft: '1em',
      cursor: 'pointer',
      transition: 'color 0.8s',
      '&:hover': {
        color: theme.colors.brightTurquoise
      }
    }
    
  }
})

const ShareBar = ({ url }) => {
  const classes = useStyles();
  return (
    <div className={classes.shareContainer}>
      <FacebookShareButton url={url}>
        <FontAwesomeIcon icon={faFacebook} />
      </FacebookShareButton>
      <TwitterShareButton url={url}>
        <FontAwesomeIcon icon={faTwitter} />
      </TwitterShareButton>
      <TelegramShareButton url={url}>
        <FontAwesomeIcon icon={faTelegram} />
      </TelegramShareButton>
      <WhatsappShareButton url={url}>
        <FontAwesomeIcon icon={faWhatsapp} />
      </WhatsappShareButton>
      <PinterestShareButton url={url}>
        <FontAwesomeIcon icon={faPinterest} />
      </PinterestShareButton>
    </div>
  )
}

const PostTemplate = ({ data, pageContext }) => {
  const {
    title,
    slug,
    heroImage,
    body,
    publishDate,
    tags,
  } = data.contentfulPost
  const postNode = data.contentfulPost

  const previous = pageContext.prev
  const next = pageContext.next

  const shareLink = `${config.siteUrl}/${slug}`

  return (
    <Layout>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO pagePath={slug} postNode={postNode} postSEO />

      <Hero title={title} image={heroImage} height={'50vh'} />

      <Container>
        {tags && <TagList tags={tags} />}
        <PostDetails
          date={publishDate}
          timeToRead={body.childMarkdownRemark.timeToRead}
        />
        <PageBody body={body} />
        <ShareBar url={shareLink} />
        <PostLinks previous={previous} next={next} />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      slug
      metaDescription {
        internal {
          content
        }
      }
      publishDate(formatString: "MMMM DD, YYYY")
      publishDateISO: publishDate(formatString: "YYYY-MM-DD")
      tags {
        title
        id
        slug
      }
      heroImage {
        title
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
        ogimg: resize(width: 1800) {
          src
          width
          height
        }
      }
      body {
        childMarkdownRemark {
          timeToRead
          html
          excerpt(pruneLength: 320)
        }
      }
    }
  }
`

export default PostTemplate
