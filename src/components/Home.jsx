import React from 'react'
import styled from 'styled-components'
import Pokedex from './Pokedex'

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 200px;
`

const Title = styled.h1`
  font-size: 32px;
  text-align: center;
`

const Home = () => {
  return (
    <Page>
      <Title>Pokedex</Title>
      <Pokedex pokemon='bulbasaur'/>
    </Page>
  )
}

export default Home
