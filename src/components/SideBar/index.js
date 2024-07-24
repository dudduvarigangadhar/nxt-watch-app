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

      const bgColor = isDark ? '#181818' : '#f9f9f9'

      return (
        <SideBarCon theme={bgColor}>
          <UnorderedList>
            <ListItem
              onClick={onChangeHomeRoute}
              isActive={activeId === 'HOME' ? '#f1f5f9' : 'transparent'}
            >
              <NavLink to="/">
                <AiFillHome size={20} />
              </NavLink>

              <ListPara>Home</ListPara>
            </ListItem>
            <ListItem
              isActive={activeId === 'TRENDING' ? '#f1f5f9' : 'transparent'}
              onClick={onChangeTrendingRoute}
            >
              <NavLink to="/trending">
                <AiFillFire size={20} />
              </NavLink>

              <ListPara>Trending</ListPara>
            </ListItem>
            <ListItem
              isActive={activeId === 'GAMING' ? '#f1f5f9' : 'transparent'}
              onClick={onChangeGamingRoute}
            >
              <NavLink to="/gaming">
                <SiYoutubegaming size={20} />
              </NavLink>

              <ListPara>Gaming</ListPara>
            </ListItem>
            <ListItem
              isActive={activeId === 'SAVEDVIDEOS' ? '#f1f5f9' : 'transparent'}
              onClick={onChangeSavedVideosRoute}
            >
              <NavLink to="savedVideos">
                <MdPlaylistAdd size={20} />
              </NavLink>

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
        </SideBarCon>
      )
    }}
  </ThemeContext.Consumer>
)

export default SideBar
