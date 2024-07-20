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

      /* const textColor = isDark ? '#f9f9f9' : ' #7e858e' */

      /* const bgColor = isDark ? '#181818' : '#f9f9f9' */

      /* console.log(bgColor) */
      return (
        <HeaderContainer theme={isDark}>
          <>
            <LogoImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="nxt watch logo"
            />
          </>
          <HeaderProfile>
            <ProfileImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />

            {isDark ? (
              <FiSun size={30} onClick={changeTheme} />
            ) : (
              <BsMoon size={30} onClick={changeTheme} />
            )}

            <LogoutBtn type="button">Logout</LogoutBtn>
          </HeaderProfile>
        </HeaderContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default Header
