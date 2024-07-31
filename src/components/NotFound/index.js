import Header from '../Header'
import SideBar from '../SideBar'
import ThemeContext from '../../Context/ThemeContext'

import {
  NotFoundImg,
  NotFoundContainer,
  NotFoundHeading,
  NotFoundPara,
  NotFoundImgContainer,
} from './styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value
      const light =
        'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      const darkImg =
        'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'

      const imgUrl = isDark ? darkImg : light
      const heading = isDark ? '#f1f5f9' : '#1e293b'
      const para = isDark ? 'grey' : '#1e293b'

      const bgColor = isDark ? '#000000' : '#f9f9f9'

      return (
        <div>
          <Header />
          <NotFoundContainer color={bgColor}>
            <SideBar />
            <NotFoundImgContainer>
              <NotFoundImg src={imgUrl} alt="not found" />
              <NotFoundHeading color={heading}>Page Not Found</NotFoundHeading>
              <NotFoundPara color={para}>
                We are sorry, the page you requested could not be found.
              </NotFoundPara>
            </NotFoundImgContainer>
          </NotFoundContainer>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
