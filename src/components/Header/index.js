import {BsMoon} from 'react-icons/bs'
import {FiSun} from 'react-icons/fi'

import {
  LogoImg,
  ProfileImg,
  LogoutBtn,
  HeaderContainer,
  HeaderProfile,
} from './styledComponents'

const Header = () => (
  <HeaderContainer>
    <>
      <LogoImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        alt="logo"
      />
    </>
    <HeaderProfile>
      <ProfileImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
        alt="profile"
      />

      <BsMoon size={30} />
      {/* <FiSun /> */}

      <LogoutBtn type="button">Logout</LogoutBtn>
    </HeaderProfile>
  </HeaderContainer>
)

export default Header
