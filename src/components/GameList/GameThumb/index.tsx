import { icoHot, icoNew } from '../../../assets/images'

export type Game = {
  thumb: string
  name: string
  isHot?: boolean
  isNew?: boolean
}

type Props = {
  game: Game
}

export const GameThumb = ({ game }: Props) => {
  return (
    <div className="game-item" style={{ backgroundImage: `url(${game.thumb})` }}>
      <GameThumbLabel isHot={game.isHot} isNew={game.isNew} />
      <div className="game-name">
        <p className="name">{game.name}</p>
      </div>
    </div>
  )
}

type GameThumbLabelProps = {
  isHot?: boolean
  isNew?: boolean
}

const GameThumbLabel = ({ isHot = false, isNew = false }: GameThumbLabelProps) => {
  if (isHot) {
    return (
      <span className="game-label">
        <img src={icoHot} />
      </span>
    )
  }

  if (isNew) {
    return (
      <span className="game-label">
        <img src={icoNew} />
      </span>
    )
  }

  return null
}
