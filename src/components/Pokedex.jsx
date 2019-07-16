import React from 'react'
import styled from 'styled-components'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Type from './common/TypePill'
import WeightRow from './WeightRow'
import HeightRow from './HeightRow'

const OuterEdge = styled.div`
  background-color: #ff2929;
  height: 600px;
  display: flex;
`

const LeftSide = styled.div`

`

const RightSide = styled.div`

`

const Screen = styled.div`
  background-color: #fff1b8

`

const Number = styled.h6`
  
`

const PokemonName = styled.h6`

`

const TypeRow = styled.div`

`


const Pokedex = ({ data: { loading, pokemon: { id, name, weight, height, types } = {} } }) => {
  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <OuterEdge>
      <LeftSide>
        <Screen>
          <Number>{id}</Number>
          <PokemonName>{name}</PokemonName>
          <TypeRow>
            {types.map( type => <Type type={type} />)}
          </TypeRow>
        </Screen>
      </LeftSide>
      <RightSide>
        <Screen>
          <WeightRow weight={weight} />
          <HeightRow height={height} />
        </Screen>
      </RightSide>
    </OuterEdge>
  )
}

const GetPokemonByName = gql`
  query GetPokemonByName($name: String!) {
    pokemon(name: $name) {
      id
      name
      height
      weight
      types
    }
  }
`

export default graphql(
  GetPokemonByName,
  { options: props => ({
      variables: {
        name: props.pokemon
      }
    })
  }
)(Pokedex)
