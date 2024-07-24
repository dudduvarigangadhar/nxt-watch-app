import {BsMoon} from 'react-icons/bs'
import {FiSun} from 'react-icons/fi'

import {
  LogoImg,
  ProfileImg,
  LogoutBtn,
  HeaderContainer,
  HeaderProfile,
} from './styledComponents'
import ThemeContext from '../../Context/ThemeContext'

const Header = () => (
  <ThemeContext.Consumer>
    {value => {
      const {changeTheme, isDark} = value

      const OnChangeTheme = () => {
        changeTheme()
      }

      const textColor = isDark ? '#f9f9f9' : ' #181818'

      const bgColor = isDark ? '#181818' : '#f9f9f9'

      console.log('Header', isDark)

      return (
        <HeaderContainer theme={bgColor}>
          <>
            {isDark ? (
              <LogoImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                alt="nxt watch logo"
              />
            ) : (
              <LogoImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="nxt watch logo"
              />
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

            <LogoutBtn type="button">Logout</LogoutBtn>
          </HeaderProfile>
        </HeaderContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default Header
