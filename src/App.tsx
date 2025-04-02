import {
  carousel1,
  carouselBg,
  game100hpGaming,
  gameEvolution,
  gameOnlyplay,
  gameVeliplay2,
  gameVeliplay3,
  gameVeliplay4,
  gameVeliplay5,
  gameVeliplay6,
  icoAndroid,
  icoApple,
  icoDiamond,
  icoFacebook,
  icoGames,
  icoHot,
  icoHotMatch,
  icoInstagram,
  icoMenu,
  icoNew,
  icoP2pTransaction,
  icoPromotion,
  icoProviders,
  icoSearch,
  icoSeeAll,
  icoTelegram,
  icoTwitter,
  icoVip,
  logo100hpGaming,
  logoBgaming,
  logoEvolution,
  logoSmartsoft,
  logoSpribe,
  logoTurboGame,
  logoVeliplay,
  logoWazdan,
  mainLogo
} from './assets/images'
import { ContentHeader } from './components/ContentHeader'
import { Section } from './components/Section'

const App = () => {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="left">
            <div className="menu-toggler-and-logo">
              <div className="menu-toggler">
                <img src={icoMenu} />
              </div>
              <div className="logo">
                <img src={mainLogo} />
              </div>
            </div>
            <div className="search-button-and-menu">
              <div className="search-button">
                <img src={icoSearch} />
              </div>
              <nav className="menu">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Game</a>
                  </li>
                  <li>
                    <a href="#">Infor</a>
                  </li>
                  <li>
                    <a href="#">News</a>
                  </li>
                  <li>
                    <a href="#">Promotions</a>
                  </li>
                  <li>
                    <a href="#">VIP</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="right">
            <button className="login-button">Login</button>
            <button className="registration-button">Registration</button>
          </div>
        </div>
      </div>

      <div className="carousel">
        <div className="carousel-item" style={{ backgroundImage: `url(${carouselBg})` }}>
          <div className="carousel-data">
            <div className="badge">Exclusive Tournament</div>
            <div className="heading">Piggy Christmas Tap: €35,000 For Your Wins</div>
            <div className="cta-button">Join and Win</div>
          </div>
          <div className="carousel-image">
            <img src={carousel1} />
          </div>
        </div>
      </div>

      <div className="content">
        <div className="container">
          <div className="category-list">
            <div className="category-item is-pc">
              <span className="category-icon">
                <img src={icoDiamond} />
              </span>
              <span className="category-label">Diamond</span>
            </div>
            <div className="category-item is-pc">
              <span className="category-icon">
                <img src={icoVip} />
              </span>
              <span className="category-label">VIP</span>
            </div>
            <div className="category-item is-pc">
              <span className="category-icon">
                <img src={icoPromotion} />
              </span>
              <span className="category-label">Promotion</span>
            </div>
            <div className="category-item is-pc">
              <span className="category-icon">
                <img src={icoHotMatch} />
              </span>
              <span className="category-label">Hot Match</span>
            </div>
            <div className="category-item is-pc">
              <span className="category-icon">
                <img src={icoP2pTransaction} />
              </span>
              <span className="category-label">P2P Transaction</span>
            </div>

            <div className="category-item is-button is-mobile">
              <span className="category-icon">
                <img src={icoSearch} />
              </span>
              <span className="category-label">Search</span>
            </div>
            <div className="category-item is-button">
              <span className="category-icon">
                <img src={icoGames} />
              </span>
              <span className="category-label">Games</span>
            </div>
            <div className="category-item is-button">
              <span className="category-icon">
                <img src={icoProviders} />
              </span>
              <span className="category-label">Providers</span>
            </div>
          </div>

          <Section>
            <Section.Header>
              <ContentHeader>
                <ContentHeader.Title>Exclusive Games</ContentHeader.Title>
                <ContentHeader.Action>
                  See All
                  <img src={icoSeeAll} />
                </ContentHeader.Action>
              </ContentHeader>
            </Section.Header>
            <Section.Body>
              <div className="scroll-area">
                <div className="game-list">
                  <div className="game-item" style={{ backgroundImage: `url(${game100hpGaming})` }}>
                    <span className="game-label">
                      <img src={icoHot} />
                    </span>
                    <div className="game-name">
                      <p className="name">100HP Gaming</p>
                    </div>
                  </div>
                  <div className="game-item" style={{ backgroundImage: `url(${gameVeliplay2})` }}>
                    <span className="game-label">
                      <img src={icoHot} />
                    </span>
                    <div className="game-name">
                      <p className="name">Veliplay</p>
                    </div>
                  </div>
                  <div className="game-item" style={{ backgroundImage: `url(${gameEvolution})` }}>
                    <span className="game-label">
                      <img src={icoNew} />
                    </span>
                    <div className="game-name">
                      <p className="name">Evolution</p>
                    </div>
                  </div>
                  <div className="game-item" style={{ backgroundImage: `url(${gameVeliplay2})` }}>
                    <span className="game-label">
                      <img src={icoNew} />
                    </span>
                    <div className="game-name">
                      <p className="name">Veliplay</p>
                    </div>
                  </div>
                  <div className="game-item" style={{ backgroundImage: `url(${gameOnlyplay})` }}>
                    <div className="game-name">
                      <p className="name">Onlyplay</p>
                    </div>
                  </div>
                  <div className="game-item" style={{ backgroundImage: `url(${gameVeliplay3})` }}>
                    <div className="game-name">
                      <p className="name">Veliplay</p>
                    </div>
                  </div>
                  <div className="game-item" style={{ backgroundImage: `url(${gameVeliplay4})` }}>
                    <div className="game-name">
                      <p className="name">Veliplay</p>
                    </div>
                  </div>
                  <div className="game-item" style={{ backgroundImage: `url(${gameVeliplay5})` }}>
                    <div className="game-name">
                      <p className="name">Veliplay</p>
                    </div>
                  </div>
                  <div className="game-item" style={{ backgroundImage: `url(${gameVeliplay6})` }}>
                    <div className="game-name">
                      <p className="name">Veliplay</p>
                    </div>
                  </div>
                </div>
              </div>
            </Section.Body>
          </Section>

          <Section>
            <Section.Header>
              <ContentHeader>
                <ContentHeader.Title>All Providers</ContentHeader.Title>
                <ContentHeader.Action>
                  See All
                  <img src={icoSeeAll} />
                </ContentHeader.Action>
              </ContentHeader>
            </Section.Header>
            <Section.Body>
              <div className="scroll-area">
                <div className="provider-container">
                  <div className="provider-list">
                    <div className="provider-item">
                      <div className="provider-logo">
                        <img src={logoEvolution} />
                      </div>
                      <div className="provider-name-and-games-amount">
                        <p className="provider-name">Evolution</p>
                        <p className="provider-games-amount">312 games</p>
                      </div>
                    </div>

                    <div className="provider-item">
                      <div className="provider-logo">
                        <img src={logoSpribe} />
                      </div>
                      <div className="provider-name-and-games-amount">
                        <p className="provider-name">Spribe</p>
                        <p className="provider-games-amount">12 games</p>
                      </div>
                    </div>

                    <div className="provider-item">
                      <div className="provider-logo">
                        <img src={logoVeliplay} />
                      </div>
                      <div className="provider-name-and-games-amount">
                        <p className="provider-name">VeliPlay</p>
                        <p className="provider-games-amount">9 games</p>
                      </div>
                    </div>

                    <div className="provider-item">
                      <div className="provider-logo">
                        <img src={logoTurboGame} />
                      </div>
                      <div className="provider-name-and-games-amount">
                        <p className="provider-name">Turbo Games</p>
                        <p className="provider-games-amount">36 games</p>
                      </div>
                    </div>

                    <div className="provider-item">
                      <div className="provider-logo">
                        <img src={logoSmartsoft} />
                      </div>
                      <div className="provider-name-and-games-amount">
                        <p className="provider-name">SmartSoft</p>
                        <p className="provider-games-amount">37 games</p>
                      </div>
                    </div>

                    <div className="provider-item">
                      <div className="provider-logo">
                        <img src={logo100hpGaming} />
                      </div>
                      <div className="provider-name-and-games-amount">
                        <p className="provider-name">100HP Gaming</p>
                        <p className="provider-games-amount">7 games</p>
                      </div>
                    </div>

                    <div className="provider-item">
                      <div className="provider-logo">
                        <img src={logoBgaming} />
                      </div>
                      <div className="provider-name-and-games-amount">
                        <p className="provider-name">BGaming</p>
                        <p className="provider-games-amount">166 games</p>
                      </div>
                    </div>

                    <div className="provider-item">
                      <div className="provider-logo">
                        <img src={logoWazdan} />
                      </div>
                      <div className="provider-name-and-games-amount">
                        <p className="provider-name">Wazdan</p>
                        <p className="provider-games-amount">199 games</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Section.Body>
          </Section>
        </div>
      </div>

      <div className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="contact">
              <div className="help-center">
                <div className="text">
                  <h3>Help Center</h3>
                  <p>If you have any question?</p>
                </div>
                <button>Get Anwsers</button>
              </div>
              <div className="socials-label">Follow us</div>
              <div className="socials">
                <a href="#">
                  <img src={icoTelegram} />
                </a>
                <a href="#">
                  <img src={icoFacebook} />
                </a>
                <a href="#">
                  <img src={icoInstagram} />
                </a>
                <a href="#">
                  <img src={icoTwitter} />
                </a>
              </div>
            </div>
            <div className="footer-menu">
              <h3 className="footer-menu-header">Games</h3>
              <ul>
                <li>
                  <a href="#">Game 1</a>
                </li>
                <li>
                  <a href="#">Game 2</a>
                </li>
                <li>
                  <a href="#">Game 3</a>
                </li>
                <li>
                  <a href="#">Game 14</a>
                </li>
              </ul>
            </div>
            <div className="footer-menu">
              <h3 className="footer-menu-header">About</h3>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Promotion</a>
                </li>
                <li>
                  <a href="#">VIP</a>
                </li>
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">Awards & Certificates</a>
                </li>
                <li>
                  <a href="#">App</a>
                </li>
              </ul>
            </div>
            <div className="footer-menu">
              <h3 className="footer-menu-header">Legal Information</h3>
              <ul>
                <li>
                  <a href="#">General Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Responsible Game Policy</a>
                </li>
                <li>
                  <a href="#">Sports Betting Rule</a>
                </li>
                <li>
                  <a href="#">Privary and Cookies Policy</a>
                </li>
                <li>
                  <a href="#">Payment Methods</a>
                </li>
                <li>
                  <a href="#">Limits</a>
                </li>
              </ul>
            </div>
            <div className="download-platforms">
              <a href="#" className="macos">
                <img src={icoApple} />
                Bluechip App for Mac OS
              </a>
              <div className="mobiles">
                <a href="#" className="android">
                  <img src={icoAndroid} />
                  <div className="text-pc">Android</div>
                  <div className="text-mb">
                    <p>Bluechip App</p>
                    <span>for Android</span>
                  </div>
                </a>
                <a href="#" className="ios">
                  <img src={icoApple} />
                  <div className="text-pc">iOS</div>
                  <div className="text-mb">
                    <p>Bluechip App</p>
                    <span>for iOS</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
