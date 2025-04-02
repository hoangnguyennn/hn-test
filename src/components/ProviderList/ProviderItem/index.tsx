import { useMemo } from 'react'

export type Provider = {
  logo: string
  name: string
  numberOfGames: number
}

type Props = {
  provider: Provider
}

export const ProviderItem = ({ provider }: Props) => {
  const numberOfGamesFormatted = useMemo(() => {
    if (provider.numberOfGames === 1) return `${provider.numberOfGames} game`
    return `${provider.numberOfGames} games`
  }, [provider.numberOfGames])

  return (
    <div className="provider-item">
      <div className="provider-logo">
        <img src={provider.logo} alt={provider.name} />
      </div>
      <div className="provider-name-and-games-amount">
        <p className="provider-name">{provider.name}</p>
        <p className="provider-games-amount">{numberOfGamesFormatted}</p>
      </div>
    </div>
  )
}
