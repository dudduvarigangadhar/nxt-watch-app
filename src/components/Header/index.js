import Popup from 'reactjs-popup'
import {withRouter, Link} from 'react-router-dom'
import {BsMoon} from 'react-icons/bs'
import {FiSun} from 'react-icons/fi'
import Cookies from 'js-cookie'

import {
  LogoImg,
  ProfileImg,
  LogoutBtn,
  HeaderContainer,
  HeaderProfile,
  PopUpContainer,
  ConfirmBtn,
  PopUpMessage,
  CancelBtn,
  ButtonsCon,
  LogoBtn,
  ModalDesc,
  ThemeButton,
} from './styledComponents'
import ThemeContext from '../../Context/ThemeContext'

const Header = props => {
  const onLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {changeTheme, isDark} = value

        const OnChangeTheme = () => {
          changeTheme()
        }

        const textColor = isDark ? '#f9f9f9' : ' #181818'

        const bgColor = isDark ? '#212121' : '#ffffff'

        return (
          <HeaderContainer theme={bgColor}>
            <>
              {isDark ? (
                <Link to="/">
                  <LogoBtn>
                    <LogoImg
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                      alt="website logo"
                    />
                  </LogoBtn>
                </Link>
              ) : (
                <Link to="/">
                  <LogoBtn>
                    <LogoImg
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      alt="website logo"
                    />
                  </LogoBtn>
                </Link>
              )}
            </>
            <HeaderProfile>
              {isDark ? (
                <ThemeButton
                  type="button"
                  onClick={OnChangeTheme}
                  data-testid="theme"
                >
                  <FiSun size={30} color={textColor} />
                </ThemeButton>
              ) : (
                <ThemeButton
                  type="button"
                  onClick={OnChangeTheme}
                  data-testid="theme"
                >
                  <BsMoon size={30} color={textColor} />
                </ThemeButton>
              )}

              <ProfileImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />

              <Popup
                modal
                trigger={
                  <LogoutBtn
                    type="button"
                    // className="trigger-button"
                    color={isDark ? '#ffffff' : '#3b82f6'}
                    data-testid="iconButton"
                  >
                    Logout
                  </LogoutBtn>
                }
              >
                {close => (
                  <PopUpContainer>
                    <ModalDesc>
                      <PopUpMessage>
                        Are you sure, you want to logout
                      </PopUpMessage>
                    </ModalDesc>
                    <ButtonsCon>
                      <CancelBtn
                        type="button"
                        onClick={() => close()}
                        data-testid="closeButton"
                      >
                        Cancel
                      </CancelBtn>
                      <ConfirmBtn type="button" onClick={onLogout}>
                        Confirm
                      </ConfirmBtn>
                    </ButtonsCon>
                  </PopUpContainer>
                )}
              </Popup>
            </HeaderProfile>
          </HeaderContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Header)
