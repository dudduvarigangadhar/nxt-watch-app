import Cookies from 'js-cookie'
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import {AiFillFire} from 'react-icons/ai'
import Header from '../Header'
import SideBar from '../SideBar'
import ThemeContext from '../../Context/ThemeContext'
import TrendingVideo from '../TrendingVideo'

import {
  TrendingSideBarContainer,
  FireLogoContainer,
  TrendingBlockContainer,
  TrendingHeading,
  TrendingMidCon,
  TrendingVideosList,
  TrendingViewContent,
  TrendingFailureImg,
  TrendingFailureContainer,
  TrendingFailureHeading,
  TrendingFailurePara,
  TrendingRetryButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class Trending extends Component {
  state = {
    trendingVideos: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.renderTrendingVideos()
  }

  renderTrendingVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      //   console.log(fetchedData)
      const updatedData = fetchedData.videos.map(eachItem => ({
        name: eachItem.channel.name,
        profileImageUrl: eachItem.channel.profile_image_url,
        id: eachItem.id,
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))

      this.setState({
        trendingVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderFailureView = isDark => {
    const heading = isDark ? '#f9f9f9' : '#1e293b'
    const paragraph = isDark ? '#475569' : '#616e7c'
    return (
      <>
        <TrendingFailureContainer>
          {isDark ? (
            <TrendingFailureImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
              alt="failure view"
            />
          ) : (
            <TrendingFailureImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
              alt="failure view"
            />
          )}
          <TrendingFailureHeading color={heading}>
            Oops! Something Went Wrong
          </TrendingFailureHeading>
          <TrendingFailurePara color={paragraph}>
            We are having some trouble to complete your request.
          </TrendingFailurePara>
          <TrendingFailurePara color={paragraph}>
            Please try again.
          </TrendingFailurePara>
          <TrendingRetryButton type="button">Retry</TrendingRetryButton>
        </TrendingFailureContainer>
      </>
    )
  }

  renderLoadingView = () => (
    <div className="loader-container">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderSuccessView = () => {
    const {trendingVideos} = this.state
    // console.log(trendingVideos)
    return (
      <TrendingVideosList>
        {trendingVideos.map(eachVideo => (
          <TrendingVideo details={eachVideo} key={eachVideo.id} />
        ))}
      </TrendingVideosList>
    )
  }

  renderTrendingViews = isDark => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView(isDark)
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {trendingVideos, apiStatus} = this.state
    // console.log(trendingVideos)
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          const logoCon = isDark ? '#000000' : '#d7dfe9'
          const heading = isDark ? '#f1f5f9' : '#1e293b'
          const topContainer = isDark ? '#181818' : '#ebebeb'
          const bgColor = isDark ? '#000000' : '#f9f9f9'
          return (
            <div>
              <Header />
              <TrendingSideBarContainer>
                <SideBar />
                <TrendingMidCon>
                  {apiStatus === apiStatusConstants.success && (
                    <TrendingBlockContainer color={topContainer}>
                      <FireLogoContainer color={logoCon}>
                        <AiFillFire color="#ff0b37" size={30} />
                      </FireLogoContainer>
                      <TrendingHeading color={heading}>
                        Trending
                      </TrendingHeading>
                    </TrendingBlockContainer>
                  )}
                  <TrendingViewContent color={bgColor}>
                    {this.renderTrendingViews(isDark)}
                  </TrendingViewContent>
                </TrendingMidCon>
              </TrendingSideBarContainer>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
