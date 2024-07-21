import {Component} from 'react'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
// import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {IoIosClose} from 'react-icons/io'
import Header from '../Header'
import ThemeContext from '../../Context/ThemeContext'

import {
  HomeContainer,
  UnorderedList,
  SideBar,
  ContactContainer,
  ImageLogo,
  Recommendations,
  ListItem,
  ContactUsHeading,
  ListPara,
  HomeDivContainer,
  BannerImg,
  BannerHeading,
  BannerBtn,
  BannerContainer,
  CloseContainer,
  BannerDivImg,
} from './styledComponents'

class Home extends Component {
  //   state = {}

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark, activeId, activeTabId} = value

          /* const textColor = isDark ? '#f9f9f9' : ' #7e858e' */

          /* const bgColor = isDark ? '#181818' : '#f9f9f9' */

          const onChangeHomeRoute = () => {
            activeTabId('HOME')
            console.log('Home')
          }

          const onChangeTrendingRoute = () => {
            activeTabId('Trending')
            console.log('trending')
          }

          const onChangeGamingRoute = () => {
            activeTabId('Gaming')
            console.log('gaming')
          }

          const onChangeSavedVideosRoute = () => {
            activeTabId('SavedVideos')

            console.log('saved')
          }

          return (
            <HomeContainer data-testid="home">
              <Header />
              <HomeDivContainer>
                <SideBar>
                  <UnorderedList>
                    <ListItem id="HOME" onClick={onChangeHomeRoute}>
                      <AiFillHome size={20} />
                      <ListPara>Home</ListPara>
                    </ListItem>
                    <ListItem id="Trending" onClick={onChangeTrendingRoute}>
                      <AiFillFire size={20} />
                      <ListPara>Trending</ListPara>
                    </ListItem>
                    <ListItem id="Gaming" onClick={onChangeGamingRoute}>
                      <SiYoutubegaming size={20} />
                      <ListPara>Gaming</ListPara>
                    </ListItem>
                    <ListItem
                      id="Saved videos"
                      onClick={onChangeSavedVideosRoute}
                    >
                      <MdPlaylistAdd size={20} />
                      <ListPara> Saved videos </ListPara>
                    </ListItem>
                  </UnorderedList>
                  <ContactContainer>
                    <ContactUsHeading>CONTACT US</ContactUsHeading>
                    <div>
                      <ImageLogo
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                        alt="facebook logo"
                      />
                      <ImageLogo
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                        alt="twitter logo"
                      />
                      <ImageLogo
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                        alt="linked in logo"
                      />
                    </div>
                    <Recommendations>
                      Enjoy! Now to see your channels and recommendations!
                    </Recommendations>
                  </ContactContainer>
                </SideBar>
                <div>
                  <BannerContainer>
                    <div>
                      <BannerImg
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <BannerHeading>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </BannerHeading>
                      <BannerBtn type="button">GET IT NOW</BannerBtn>
                    </div>
                    <CloseContainer>
                      <IoIosClose size={30} />
                    </CloseContainer>
                  </BannerContainer>
                </div>
              </HomeDivContainer>
            </HomeContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Home
