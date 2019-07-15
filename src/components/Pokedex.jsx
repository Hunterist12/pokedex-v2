import React from 'react'
import styled from 'styled-components'

const OuterEdge = styled.div`
  background-color: #ff2929
  height: 600px;
`

const Screen = styled.div`
  background-color: #fff1b8
  
`

const PokemonName = styled.h6`

`

const Pokedex = () => {
  return (
    <OuterEdge>
      <Screen>
        <PokemonName></PokemonName>
      </Screen>
    </OuterEdge>
  )
}

export default Pokedex
