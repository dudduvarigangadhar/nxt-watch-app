import {Component} from 'react'
import {SiYoutubegaming} from 'react-icons/si'

import Loader from 'react-loader-spinner'

import Cookies from 'js-cookie'
import Header from '../Header'
import SideBar from '../SideBar'
import ThemeContext from '../../Context/ThemeContext'
import GamingVideoCard from '../GamingVideoCard'

import {
  GamingContainer,
  GamingVideoCardContainer,
  GamingViewCon,
  GamingHeadingCon,
  //   GamingHeadingDiv,
  DivContainer,
  GamingBlock,
  GamingLogoCon,
  GamingSuccessViewContainer,
  GamingHeading,
  GamingRetryButton,
  GamingFailurePara,
  GamingFailureHeading,
  GamingFailureImg,
  GamingFailureContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class Gaming extends Component {
  state = {gamingVideos: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getGamingVideos()
  }

  onRetry = () => {
    this.setState({}, this.getGamingVideos)
  }

  getGamingVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.videos.map(eachItem => ({
        id: eachItem.id,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))
      this.setState({
        gamingVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderGamingVideos = isDark => {
    const {gamingVideos} = this.state

    return (
      <GamingSuccessViewContainer>
        <GamingVideoCardContainer>
          {gamingVideos.map(eachItem => (
            <GamingVideoCard details={eachItem} key={eachItem.id} />
          ))}
        </GamingVideoCardContainer>
      </GamingSuccessViewContainer>
    )
  }

  renderGamingFailureView = isDark => {
    const heading = isDark ? '#f9f9f9' : '#1e293b'
    const paragraph = isDark ? '#475569' : '#616e7c'
    return (
      <>
        <GamingFailureContainer>
          {isDark ? (
            <GamingFailureImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
              alt="failure view"
            />
          ) : (
            <GamingFailureImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
              alt="failure view"
            />
          )}
          <GamingFailureHeading color={heading}>
            Oops! Something Went Wrong
          </GamingFailureHeading>
          <GamingFailurePara color={paragraph}>
            We are having some trouble to complete your request.
          </GamingFailurePara>
          <GamingFailurePara color={paragraph}>
            Please try again.
          </GamingFailurePara>
          <GamingRetryButton type="button" onClick={this.onRetry}>
            Retry
          </GamingRetryButton>
        </GamingFailureContainer>
      </>
    )
  }

  renderGamingLoadingView = () => (
    <div className="loader-container" data-testid="loading">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderGamingViews = isDark => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderGamingVideos(isDark)
      case apiStatusConstants.failure:
        return this.renderGamingFailureView(isDark)
      case apiStatusConstants.inProgress:
        return this.renderGamingLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          const logoCon = isDark ? '#000000' : '#d7dfe9'
          const heading = isDark ? '#f1f5f9' : '#1e293b'
          const topContainer = isDark ? '#181818' : '#ebebeb'
          // const bgColor = isDark ? '#000000' : '#f9f9f9'
          const bgColor = isDark ? '#0f0f0f' : '#f9f9f9'
          const {apiStatus} = this.state
          return (
            <GamingBlock data-testid="gaming" color={bgColor}>
              <Header />
              <GamingContainer>
                <SideBar />
                <DivContainer>
                  {apiStatus === apiStatusConstants.success && (
                    <>
                      <GamingHeadingCon
                        color={topContainer}
                        data-testid="banner"
                      >
                        <GamingLogoCon color={logoCon}>
                          <SiYoutubegaming color="#ff0b37" size={30} />
                        </GamingLogoCon>
                        <GamingHeading color={heading}>Gaming</GamingHeading>
                      </GamingHeadingCon>
                    </>
                  )}
                  <GamingViewCon>
                    {this.renderGamingViews(isDark)}
                  </GamingViewCon>
                </DivContainer>
              </GamingContainer>
            </GamingBlock>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
