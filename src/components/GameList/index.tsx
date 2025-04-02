import {
  game100hpGaming,
  gameEvolution,
  gameOnlyplay,
  gameVeliplay,
  gameVeliplay2,
  gameVeliplay3,
  gameVeliplay4,
  gameVeliplay5,
  gameVeliplay6
} from '../../assets/images'
import { GameThumb, type Game } from './GameThumb'

const dummyGames: Game[] = [
  {
    thumb: game100hpGaming,
    name: '100HP Gaming',
    isHot: true
  },
  {
    thumb: gameVeliplay,
    name: 'Veliplay',
    isHot: true
  },
  {
    thumb: gameEvolution,
    name: 'Evolution',
    isNew: true
  },
  {
    thumb: gameVeliplay2,
    name: 'Veliplay',
    isNew: true
  },
  {
    thumb: gameOnlyplay,
    name: 'Onlyplay'
  },
  {
    thumb: gameVeliplay3,
    name: 'Veliplay'
  },
  {
    thumb: gameVeliplay4,
    name: 'Veliplay'
  },
  {
    thumb: gameVeliplay5,
    name: 'Veliplay'
  },
  {
    thumb: gameVeliplay6,
    name: 'Veliplay'
  }
]

export const GameList = () => {
  return (
    <div className="game-list">
      {dummyGames.map((game, index) => (
        <GameThumb key={index} game={game} />
      ))}
    </div>
  )
}
