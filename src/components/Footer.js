import React, { useEffect } from 'react'
import { createUseStyles } from 'react-jss'
import theme from '../styles/theme'
import Parallax from 'parallax-js'
import clouds01 from '../images/clouds01.png'

const useStyles = createUseStyles({
  footer: {
    width: '100%',
    height: '100px'
  },

  backgroundStyle: {
    width: '100%',
    height: '225px',
    position: 'absolute',
    background: `linear-gradient(0deg, ${theme.colors.daisyBush} 0%, ${theme.colors.portage} 100%)`,
    '& img': {
      position: 'absolute',
      width: '200px'
    },
    '& img:nth-child(2)': {
      right: 0,
      transform: 'scaleX(-1)'
    }
  }
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
      <ul
        ref={el => (scene = el)}
        className={classes.backgroundStyle}
      >
        <li data-depth="0.3">
          <img src={clouds01} />
          <img src={clouds01} />
        </li>
      </ul>
    </footer>
  )
}

export default Footer
