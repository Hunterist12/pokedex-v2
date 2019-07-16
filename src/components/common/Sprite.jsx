import React from 'react'

const Sprite = ({ number }) => {
  return <img src={`./images/pokemonSprites/${number}.png`} alt='pokemon sprite' />
}

export default Sprite
