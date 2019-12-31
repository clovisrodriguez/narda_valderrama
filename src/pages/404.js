import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import PageTitle from '../components/PageTitle'
import Container from '../components/Container'
import Layout from '../components/Layout'

const Text = styled.p`
  text-align: center;
  line-height: 1.6;
  a {
    color: white;
  }
`

const NotFoundPage = () => (
  <Layout>
    <Helmet>
      <title>Página no encontrada :/</title>
      <meta name="description" content="Page not found" />
    </Helmet>

    <Container>
      <PageTitle>Ups te perdiste mi Herman@</PageTitle>
      <Text>
        Vuelve de vuelta a <Link to="/">inicio</Link> o utiliza una opción del menu o el pié de página para navegar
      </Text>
    </Container>
  </Layout>
)

export default NotFoundPage
