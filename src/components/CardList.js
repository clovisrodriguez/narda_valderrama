import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
  ul:nth-child(2) {
    row-direction: row-reverse
  }
`

const CardList = props => {
  return <List>{props.children}</List>
}

export default CardList
