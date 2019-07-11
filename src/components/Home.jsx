import React from 'react'
import styled from 'styled-components'

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Title = styled.h1`
  font-size: 32px;
  text-align: center;
`

const Pokedex = styled.div`

`

const Home = () => {
  return (
    <Page>
      <Title>Pokedex</Title>
    </Page>
  )
}

export default Home
