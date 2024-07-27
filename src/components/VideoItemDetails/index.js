import {Component} from 'react'
import Cookies from 'js-cookie'
import ThemeContext from '../../Context/ThemeContext'
import {VideoDetails} from '../HomeVideo/styledComponents'
import Header from '../Header'
import SideBar from '../SideBar'

import {VideoItemDetailsContainer} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class VideoItemDetails extends Component {
  state = {apiStatus: apiStatusConstants.initial, videoItemDetails: []}

  componentDidMount() {
    this.getVideosItemDetails()
  }

  getVideosItemDetails = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    console.log(url)
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
      const videosData = data.video_details
      const updatedData = {
        name: videosData.channel.name,
        profileImageUrl: videosData.channel.profile_image_url,
        subscriberCount: videosData.channel.subscriber_count,
        description: videosData.description,
        id,
        publishedAt: videosData.published_at,
        thumbnailUrl: videosData.thumbnail_url,
        title: videosData.title,
        videoUrl: videosData.video_url,
        viewCount: videosData.view_count,
      }
      this.setState({
        videoItemDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }

    // console.log(data)
  }

  renderVideosItemsFailure = () => {}

  renderVideosItemsSuccess = () => {
    const {updatedData} = this.state
    const {
      name,
      profileImageUrl,
      subscriberCount,
      description,
      id,
      publishedAt,
      thumbnailUrl,
      title,
      videoUrl,
      viewCount,
    } = updatedData
    return (
      <div>
        <img src={profileImageUrl} alt="videoitem" />
      </div>
    )
  }

  renderVideosItemsLoading = () => {}

  renderVideosItemView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosItemsSuccess()
      case apiStatusConstants.failure:
        return this.renderVideosItemsFailure()
      case apiStatusConstants.inProgress:
        return this.renderVideosItemsLoading()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <div>
              <Header />
              <div>
                <SideBar />
                <VideoItemDetailsContainer>
                  {this.renderVideosItemView()}
                </VideoItemDetailsContainer>
              </div>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
