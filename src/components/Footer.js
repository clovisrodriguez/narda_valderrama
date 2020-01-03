import React, { useEffect } from 'react'
import { createUseStyles } from 'react-jss'
import theme from '../styles/theme'
import Parallax from 'parallax-js'
import clouds01 from '../images/clouds01.png'
import config from '../utils/siteConfig'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagram,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons'

const useStyles = createUseStyles({
  footer: {
    width: '100%',
    background: `linear-gradient(0deg, ${theme.colors.daisyBush} 0%, ${theme.colors.portage} 100%)`,
    color: theme.colors.secondary,
  },

  container: {
    maxWidth: theme.sizes.maxWidth,
    height: '210px',
    width: '100%',
    display: 'flex',
  },

  backgroundStyle: {
    position: 'absolute',
    left: 0,
    width: '100%',
    transform: 'translateY(-230px)',
    background: theme.colors.daisyBush,

    '& img': {
      position: 'absolute',
      width: '200px',
    },
    '& img:nth-child(2)': {
      transform: 'scaleX(-1)',
      right: 0,
    },
  },

  column: {
    flexGrow: 1,
    padding: '2em',

    '& h3': {
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontSize: '1.5em',
      marginBottom: '1em',
    },

    '& ul': {
      display: 'flex'
    },

    '& a': {
      color: theme.colors.secondary,
      fontSize: '2em',
      marginRight: '1em'
    }
  },

  content: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
})

const Footer = () => {
  const classes = useStyles()
  let scene = null
  // eslint-disable-next-line no-unused-vars
  let parallax = null

  useEffect(() => {
    parallax = new Parallax(scene)
  }, [])

  return (
    <footer className={classes.footer}>
      <div className={classes.content}>
        <div className={classes.container}>
          <div className={classes.column}>
            <h3>SIGUENOS</h3>
            <ul>
              {config.userInstagram && (
                <li>
                  <a
                    href={`https://instagram.com/${config.userInstagram}`}
                    target="blank"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
              )}
              {config.userTwitter && (
                <li>
                  <a
                    href={`https://twitter.com/${config.userInstagram}`}
                    target="blank"
                  >
                    <FontAwesomeIcon icon={faTwitterSquare} />
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
      <div className={classes.backgroundStyle}>
        <ul ref={el => (scene = el)}>
          <li data-depth="0.3">
            <img src={clouds01} />
            <img src={clouds01} />
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
