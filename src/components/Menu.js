import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

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
      flex-basis: 30%;
      @media (min-widht: ${props => props.theme.responsive.large}) {
        flex-basis: 80% !important;
      }
      @media (min-width: ${props => props.theme.responsive.medium}) {
        flex-basis: 70%;
      }
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

const Notification = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 1em;
  color: white;
  background: ${props => props.theme.colors.base};

  span {
    text-transform: uppercase;
    text-align: center;
    font-weight: bold;
    color: ${props => props.theme.colors.brightTurquoise};
  }
`

const activeLinkStyle = {
  color: `${props => props.theme.color.brightTurquoise}`,
}

const Menu = ({ message }) => {
  return (
    <Header>
      <Notification>
        <span>{message}</span>
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
              EL PARCHE
            </Link>
          </li>
          <li>
            <Link to="/contact/" activeStyle={activeLinkStyle}>
              CONTACTO
            </Link>
          </li>
        </ul>
      </Nav>
    </Header>
  )
}

export default Menu
