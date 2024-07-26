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

  renderFailureView = () => {}

  renderLoadingView = () => (
    <div className="loader-container">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderSuccessView = () => {
    const {trendingVideos} = this.state
    console.log(trendingVideos)
    return (
      <div>
        {trendingVideos.map(eachVideo => (
          <TrendingVideo details={eachVideo} key={eachVideo.id} />
        ))}
      </div>
    )
  }

  renderTrendingViews = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {trendingVideos} = this.state
    console.log(trendingVideos)
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          const logoCon = isDark ? '#000000' : '#d7dfe9'
          const heading = isDark ? '#f1f5f9' : '#1e293b'
          const topContainer = isDark ? '#181818' : '#ebebeb'
          return (
            <div>
              <Header />
              <TrendingSideBarContainer>
                <SideBar />
                <TrendingBlockContainer color={topContainer}>
                  <FireLogoContainer color={logoCon}>
                    <AiFillFire color="#ff0b37" size={30} />
                  </FireLogoContainer>
                  <TrendingHeading color={heading}>Trending</TrendingHeading>
                </TrendingBlockContainer>
                <div>{this.renderTrendingViews()}</div>
              </TrendingSideBarContainer>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
