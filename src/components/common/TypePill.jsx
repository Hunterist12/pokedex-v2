import React from 'react'
import styled from 'styled-components'

const getColor = ({ type }) => {
  const typeColorCodes = {
    BUG: '#89960f',
    DARK: '#3e2d23',
    DRAGON: '#715bd8',
    ELECTRIC: '#fcba1a',
    FAIRY: '#e9a5e8',
    FIGHTING: '#5f2316',
    FIRE: '#d52b03',
    FLYING: '#5d76d3',
    GHOST: '#5f5ba7',
    GRASS: '#70ba35',
    GROUND: '#ceab53',
    ICE: '#6ad3f4',
    NORMAL: '#c2bcb3',
    POISON: '#824082',
    PSYCHIC: '#dd3163',
    ROCK: '#a88d44',
    STEEL: '#908fa0',
    WATER: '#0c66c1'
  }
  return typeColorCodes[type]
}

const Pill = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  background: ${getColor}
`

const TypePill = ({ type }) => {
  return (
    <Pill>{type}</Pill>
  )
}

export default TypePill
