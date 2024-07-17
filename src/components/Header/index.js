// import {MdOutlineLightMode} from 'react-icons/md'
// , MdDarkMode
import {GiHamburgerMenu} from 'react-icons/gi'
// import {MdDarkMode} from 'react-icons/md'
import {LogoImg, ThemeImg, ProfileImg, LogoutBtn} from './styledComponents'

const Header = () => {
  const word = ''
  return (
    <div>
      <>
        <LogoImg
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="logo"
        />
      </>
      <div>
        <GiHamburgerMenu />
        <ProfileImg
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
          alt="profile"
        />
        <LogoutBtn type="button">Logout</LogoutBtn>
      </div>
    </div>
  )
}

export default Header
