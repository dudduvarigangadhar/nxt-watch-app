import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'
import {withRouter, Link} from 'react-router-dom'
import {BsMoon} from 'react-icons/bs'
import {FiSun} from 'react-icons/fi'
import {Cookies} from 'js-cookie'

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

      //const RouteToHome = () => {
      //const {history} = props
      //history.replace('/')
      //}

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
            <ProfileImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />

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

            <div>
              <Popup
                modal
                trigger={
                  <LogoutBtn
                    type="button"
                    className="trigger-button"
                    color={isDark ? '#ffffff' : '#3b82f6'}
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
                        className="trigger-button"
                        onClick={() => close()}
                        data-testid="closeButton"
                      >
                        Cancel
                      </CancelBtn>
                      <ConfirmBtn
                        type="button"
                        className="trigger-button"
                        onClick={() => onLogout()}
                      >
                        Confirm
                      </ConfirmBtn>
                    </ButtonsCon>
                  </PopUpContainer>
                )}
              </Popup>
            </div>
          </HeaderProfile>
        </HeaderContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Header)
