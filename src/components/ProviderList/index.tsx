import {
  logo100hpGaming,
  logoBgaming,
  logoEvolution,
  logoSmartsoft,
  logoSpribe,
  logoTurboGame,
  logoVeliplay,
  logoWazdan
} from '../../assets/images'
import { ProviderItem, type Provider } from './ProviderItem'

const dummyProviders: Provider[] = [
  {
    logo: logoEvolution,
    name: 'Evolution',
    numberOfGames: 312
  },
  {
    logo: logoSpribe,
    name: 'Spribe',
    numberOfGames: 12
  },
  {
    logo: logoVeliplay,
    name: 'VeliPlay',
    numberOfGames: 9
  },
  {
    logo: logoTurboGame,
    name: 'Turbo Games',
    numberOfGames: 36
  },
  {
    logo: logoSmartsoft,
    name: 'SmartSoft',
    numberOfGames: 37
  },
  {
    logo: logo100hpGaming,
    name: '10HP Gaming',
    numberOfGames: 7
  },
  {
    logo: logoBgaming,
    name: 'BGaming',
    numberOfGames: 166
  },
  {
    logo: logoWazdan,
    name: 'Wazdan',
    numberOfGames: 199
  }
]

export const ProviderList = () => {
  return (
    <div className="provider-container">
      <div className="provider-list">
        {dummyProviders.map((provider, index) => (
          <ProviderItem key={index} provider={provider} />
        ))}
      </div>
    </div>
  )
}
