import React from 'react'
import { Link } from 'gatsby'
import styled, { keyframes } from 'styled-components'

import logo from '../images/logo.png'

const Header = styled.header`
  width: 100%;
`
const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 1em 1.5em;
  z-index: 10;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  li {
    display: inline-block;
    margin-left: 1em;
    &:first-child {
      position: relative;
      margin: 0;
      flex-basis: 100%;
    }
    img {
      width: 70px;
    }
  }

  a {
    text-decoration: none;
    color: white;
    font-weight: 600;
    transition: all 0.2s;
    &:hover {
      color: white;
    }
  }
`

const notificationAnimation = keyframes`
  from {
    transform: translateX(-60vw)
  }

  to {
    transform: translateX(80vw)
  }
`

const Notification = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  height: 20px;
  padding: 1em;
  color: white;
  background: ${props => props.theme.colors.base};

  div {
    min-width: ${props => props.theme.sizes.maxWidth};
    overflow: hidden;
    span {
      text-transform: uppercase;
      position: absolute;
      animation: ${notificationAnimation} 10s linear infinite;
    }
  }
`

const activeLinkStyle = {
  color: 'white',
}

const Menu = ({ message }) => {
  return (
    <Header>
      <Notification>
        <div>
          <span>{message}</span>
        </div>
      </Notification>
      <Nav>
        <ul>
          <li>
            <Link to="/" activeStyle={activeLinkStyle}>
              <img src={logo}></img>
            </Link>
          </li>
          <li>
            <Link to="/about/" activeStyle={activeLinkStyle}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/contact/" activeStyle={activeLinkStyle}>
              CONTACT
            </Link>
          </li>
        </ul>
      </Nav>
    </Header>
  )
}

export default Menu
