import {withRouter} from 'react-router-dom'
import {BsMoon} from 'react-icons/bs'
import {FiSun} from 'react-icons/fi'
import {Cookies} from 'js-cookie'

import {
  LogoImg,
  ProfileImg,
  LogoutBtn,
  HeaderContainer,
  HeaderProfile,
  LogoBtn,
} from './styledComponents'
import ThemeContext from '../../Context/ThemeContext'

const Header = props => (
  <ThemeContext.Consumer>
    {value => {
      const {changeTheme, isDark} = value

      const OnChangeTheme = () => {
        changeTheme()
      }

      const textColor = isDark ? '#f9f9f9' : ' #181818'

      const bgColor = isDark ? '#212121' : '#ffffff'

      const onLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const RouteToHome = () => {
        const {history} = props
        history.replace('/')
      }

      return (
        <HeaderContainer theme={bgColor}>
          <>
            {isDark ? (
              <LogoBtn onClick={RouteToHome}>
                <LogoImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                  alt="nxt watch logo"
                />
              </LogoBtn>
            ) : (
              <LogoBtn onClick={RouteToHome}>
                <LogoImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="nxt watch logo"
                />
              </LogoBtn>
            )}
          </>
          <HeaderProfile>
            <ProfileImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />

            {isDark ? (
              <FiSun size={30} onClick={OnChangeTheme} color={textColor} />
            ) : (
              <BsMoon size={30} onClick={OnChangeTheme} color={textColor} />
            )}

            <LogoutBtn
              type="button"
              onClick={onLogout}
              color={isDark ? '#ffffff' : '#3b82f6'}
            >
              Logout
            </LogoutBtn>
          </HeaderProfile>
        </HeaderContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Header)
