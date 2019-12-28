import React from 'react'
import { createUseStyles } from 'react-jss'
import classNames from 'classnames'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import theme from '../styles/theme'

const useStyles = createUseStyles({
  container: {
    display: 'flex',
  },

  item: {
    flexGrow: 1,
    width: '50%',
  },

  description: {
    display: 'flex',
    textDecoration: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '2em',
  },

  title: {
    backgroundColor: theme.colors.base,
    minWidth: '50%',
    textAlign: 'center',
    padding: '0.6em',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1.5em',
    textTransform: 'uppercase',
    color: theme.colors.brightTurquoise,
  },

  backgroundOne: {
    backgroundColor: theme.colors.flory,
  },

  backgroundTwo: {
    backgroundColor: theme.colors.brightTurquoise,
  },

  a: {
    textDecoration: 'none',
  },

  subtitle: {
    color: theme.colors.base,
    marginTop: '1em',
    textAlign: 'center',
  },

  information: {
    color: theme.colors.base,
    fontStyle: 'italic',
    display: 'flex',
    marginTop: '3em',
    flexDirection: 'column',
    textAlign: 'center',
    '& span': {
      marginBottom: '0.7em',
    },
  },

  inverseRow: {
    flexDirection: 'row-reverse',
  },

  [`@media (max-width: ${theme.responsive.medium})`]: {
    container: {
      flexDirection: 'column',
    },
    inverseRow: {
      flexDirection: 'column',
    },
    item: {
      width: '100%'
    }
  },
})

const Card = ({
  slug,
  heroImage,
  title,
  publishDate,
  body,
  body: {
    childMarkdownRemark: { timeToRead },
  },
  ...props
}) => {
  const classes = useStyles()
  const even = props.index % 2 === 0

  return (
    <Link to={`/${slug}/`} className={classes.a}>
      <ul
        className={classNames([classes.container], {
          [classes.inverseRow]: even,
        })}
      >
        <li className={classes.item}>
          <Img fluid={heroImage.fluid} />
        </li>
        <li
          className={classNames(
            [classes.item],
            [classes.description],
            {
              [classes.backgroundOne]: even,
            },
            { [classes.backgroundTwo]: !even }
          )}
        >
          <h2 className={classes.title}>{title}</h2>
          <p
            className={classes.subtitle}
            dangerouslySetInnerHTML={{
              __html: body.childMarkdownRemark.excerpt,
            }}
          ></p>
          <div className={classes.information}>
            <span>{publishDate}</span>
            <span>{timeToRead} min de lectura</span>
          </div>
        </li>
      </ul>
    </Link>
  )
}

export default Card
