import {AiFillHome, AiFillFire} from 'react-icons/ai'
// import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import ThemeContext from '../../Context/ThemeContext'

import {
  UnorderedList,
  ListItem,
  ContactContainer,
  ContactUsHeading,
  ImageLogo,
  Recommendations,
  SideBarCon,
  NavLink,
  ImgCon,
  ListPara,
} from './styledComponents'

const SideBar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark, activeId, activeTabItem} = value

      const onChangeHomeRoute = () => {
        activeTabItem('HOME')
      }

      const onChangeTrendingRoute = () => {
        activeTabItem('TRENDING')
      }

      const onChangeGamingRoute = () => {
        activeTabItem('GAMING')
      }

      const onChangeSavedVideosRoute = () => {
        activeTabItem('SAVEDVIDEOS')
      }

      const bgColor = isDark ? '#212121' : '#f9f9f9'
      const textColor = isDark ? '#f1f5f9' : '#424242'
      const listLightColor = isDark ? '#383838' : '#cbd5e1'
      return (
        <SideBarCon theme={bgColor}>
          <UnorderedList>
            <ListItem
              onClick={onChangeHomeRoute}
              isActive={activeId === 'HOME' ? listLightColor : ''}
              bgColor={bgColor}
            >
              <NavLink to="/">
                <AiFillHome
                  size={20}
                  color={activeId === 'HOME' ? '#ff0b37' : '#909090'}
                />
                <ListPara
                  color={textColor}
                  font={activeId === 'HOME' ? 'bold' : 'normal'}
                >
                  Home
                </ListPara>
              </NavLink>
            </ListItem>
            <ListItem
              isActive={activeId === 'TRENDING' ? listLightColor : ''}
              onClick={onChangeTrendingRoute}
              bgColor={bgColor}
            >
              <NavLink to="/trending">
                <AiFillFire
                  size={20}
                  color={activeId === 'TRENDING' ? '#ff0b37' : '#909090'}
                />
                <ListPara
                  color={textColor}
                  font={activeId === 'TRENDING' ? 'bold' : 'normal'}
                >
                  Trending
                </ListPara>
              </NavLink>
            </ListItem>
            <ListItem
              isActive={activeId === 'GAMING' ? listLightColor : ''}
              onClick={onChangeGamingRoute}
              bgColor={bgColor}
            >
              <NavLink to="/gaming">
                <SiYoutubegaming
                  size={20}
                  color={activeId === 'GAMING' ? '#ff0b37' : '#909090'}
                />
                <ListPara
                  color={textColor}
                  font={activeId === 'GAMING' ? 'bold' : 'normal'}
                >
                  Gaming
                </ListPara>
              </NavLink>
            </ListItem>
            <ListItem
              isActive={activeId === 'SAVEDVIDEOS' ? listLightColor : ''}
              onClick={onChangeSavedVideosRoute}
              bgColor={bgColor}
            >
              <NavLink to="savedVideos">
                <MdPlaylistAdd
                  size={20}
                  color={activeId === 'SAVEDVIDEOS' ? '#ff0b37' : '#909090'}
                />
                <ListPara
                  color={textColor}
                  font={activeId === 'SAVEDVIDEOS' ? 'bold' : 'normal'}
                >
                  {' '}
                  Saved videos{' '}
                </ListPara>
              </NavLink>
            </ListItem>
          </UnorderedList>
          <ContactContainer>
            <ContactUsHeading themeText={isDark ? '#f1f5f9' : '#1e293b'}>
              CONTACT US
            </ContactUsHeading>
            <ImgCon>
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
            </ImgCon>
            <Recommendations themeText={isDark ? '#f1f5f9' : '#1e293b'}>
              Enjoy! Now to see your channels and recommendations!
            </Recommendations>
          </ContactContainer>
        </SideBarCon>
      )
    }}
  </ThemeContext.Consumer>
)

export default SideBar
