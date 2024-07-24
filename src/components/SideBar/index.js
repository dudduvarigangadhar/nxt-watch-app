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
      return (
        <SideBarCon theme={bgColor}>
          <UnorderedList>
            <ListItem
              onClick={onChangeHomeRoute}
              isActive={activeId === 'HOME' ? '#d7dfe9' : '#383838'}
            >
              <NavLink to="/">
                <AiFillHome size={20} color={isDark ? '#ff0b37' : '#909090'} />
                <ListPara color={textColor}>Home</ListPara>
              </NavLink>
            </ListItem>
            <ListItem
              isActive={activeId === 'TRENDING' ? '#f1f5f9' : 'transparent'}
              onClick={onChangeTrendingRoute}
            >
              <NavLink to="/trending">
                <AiFillFire size={20} color="#ff0000" />
                <ListPara color={textColor}>Trending</ListPara>
              </NavLink>
            </ListItem>
            <ListItem
              isActive={activeId === 'GAMING' ? '#f1f5f9' : 'transparent'}
              onClick={onChangeGamingRoute}
            >
              <NavLink to="/gaming">
                <SiYoutubegaming size={20} color="#ff0000" />
                <ListPara color={textColor}>Gaming</ListPara>
              </NavLink>
            </ListItem>
            <ListItem
              isActive={activeId === 'SAVEDVIDEOS' ? '#f1f5f9' : 'transparent'}
              onClick={onChangeSavedVideosRoute}
            >
              <NavLink to="savedVideos">
                <MdPlaylistAdd size={20} color="#ff0000" />
                <ListPara color={textColor}> Saved videos </ListPara>
              </NavLink>
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
        </SideBarCon>
      )
    }}
  </ThemeContext.Consumer>
)

export default SideBar
