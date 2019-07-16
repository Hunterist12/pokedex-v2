import React from 'react'
import styled from 'styled-components'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Type from './common/TypePill'
import WeightRow from './WeightRow'
import HeightRow from './HeightRow'
import Sprite from './common/Sprite'

const OuterEdge = styled.div`
  background-color: #ff2929;
  height: 600px;
  display: flex;
  flex-direction: row;
  `

const LeftSide = styled.div`
  margin: 16px 8px 16px 16px;
  flex: 1;
`

const RightSide = styled.div`
  margin: 16px 16px 16px 8px;
  flex: 1;
`

const Screen = styled.div`
  background-color: #fff1b8;

`

const NameRow = styled.div`
  display: flex;
  flex-direction: row;
`

const Number = styled.div`
  
`

const PokemonName = styled.div`

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
          <NameRow>
            <Number>{id}</Number>
            <PokemonName>{name}</PokemonName>
          </NameRow>
          <Sprite number={id} />
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
