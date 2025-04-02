import {
  carousel1,
  carouselBg,
  icoAndroid,
  icoApple,
  icoFacebook,
  icoInstagram,
  icoMenu,
  icoSearch,
  icoSeeAll,
  icoTelegram,
  icoTwitter,
  mainLogo
} from './assets/images'
import { Button } from './components/Button'
import { CategoryList } from './components/CategoryList'
import { ContentHeader } from './components/ContentHeader'
import { FooterMenu } from './components/FooterMenu'
import { GameList } from './components/GameList'
import { Menu } from './components/Menu'
import { ProviderList } from './components/ProviderList'
import { ScrollArea } from './components/ScrollArea'
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
              <Menu />
            </div>
          </div>
          <div className="right">
            <Button className="login-button">Login</Button>
            <Button className="registration-button">Registration</Button>
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
          <CategoryList />

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
              <ScrollArea>
                <GameList />
              </ScrollArea>
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
              <ScrollArea>
                <ProviderList />
              </ScrollArea>
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
            <FooterMenu>
              <FooterMenu.Header>Games</FooterMenu.Header>
              <FooterMenu.List>
                <FooterMenu.Item>
                  <a href="#">Game 1</a>
                </FooterMenu.Item>
                <FooterMenu.Item>
                  <a href="#">Game 2</a>
                </FooterMenu.Item>
                <FooterMenu.Item>
                  <a href="#">Game 3</a>
                </FooterMenu.Item>
                <FooterMenu.Item>
                  <a href="#">Game 14</a>
                </FooterMenu.Item>
              </FooterMenu.List>
            </FooterMenu>
            <FooterMenu>
              <FooterMenu.Header>About</FooterMenu.Header>
              <FooterMenu.List>
                <FooterMenu.Item>
                  <a href="#">About Us</a>
                </FooterMenu.Item>
                <FooterMenu.Item>
                  <a href="#">Promotion</a>
                </FooterMenu.Item>
                <FooterMenu.Item>
                  <a href="#">VIP</a>
                </FooterMenu.Item>
                <FooterMenu.Item>
                  <a href="#">Help Center</a>
                </FooterMenu.Item>
                <FooterMenu.Item>
                  <a href="#">Awards & Certificates</a>
                </FooterMenu.Item>
                <FooterMenu.Item>
                  <a href="#">App</a>
                </FooterMenu.Item>
              </FooterMenu.List>
            </FooterMenu>
            <FooterMenu>
              <FooterMenu.Header>Legal Information</FooterMenu.Header>
              <FooterMenu.List>
                <FooterMenu.Item>
                  <a href="#">General Terms & Conditions</a>
                </FooterMenu.Item>
                <FooterMenu.Item>
                  <a href="#">Responsible Game Policy</a>
                </FooterMenu.Item>
                <FooterMenu.Item>
                  <a href="#">Sports Betting Rule</a>
                </FooterMenu.Item>
                <FooterMenu.Item>
                  <a href="#">Privary and Cookies Policy</a>
                </FooterMenu.Item>
                <FooterMenu.Item>
                  <a href="#">Payment Methods</a>
                </FooterMenu.Item>
                <FooterMenu.Item>
                  <a href="#">Limits</a>
                </FooterMenu.Item>
              </FooterMenu.List>
            </FooterMenu>
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
