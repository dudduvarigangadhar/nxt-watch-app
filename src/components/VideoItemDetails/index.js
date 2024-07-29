import {Component, React} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
import Loader from 'react-loader-spinner'
import ThemeContext from '../../Context/ThemeContext'
import {VideoDetails} from '../HomeVideo/styledComponents'
import Header from '../Header'
import SideBar from '../SideBar'
// import React from 'react'

// Render a YouTube video player
import {
  VideoItemDetailsContainer,
  FlexItemContainer,
  VideoItemContainer,
  VideoViewsFiled,
  VideoLikeFiled,
  VideoItemDivContainer,
  YoutubeVideoContainer,
  VideoItemPara,
  YoutubeChannelContainer,
  ProfileImg,
  Description,
  Title,
  Name,
  FlexItem,
  SubscriberCount,
  DescriptionContainer,
  Button,
  VideoItemDetailsFailureContainer,
  VideoItemDetailsFailureImg,
  VideoItemDetailsFailureHeading,
  VideoItemDetailsFailurePara,
  VideoItemDetailsFailureRetryBtn,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoItemDetails: [],
    isLike: false,
  }

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
      console.log(updatedData)
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

  renderVideosItemsFailure = isDark => {
    const heading = isDark ? '#f9f9f9' : '#1e293b'
    const paragraph = isDark ? '#475569' : '#616e7c'
    return (
      <>
        <VideoItemDetailsFailureContainer>
          {isDark ? (
            <VideoItemDetailsFailureImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
              alt="failure view"
            />
          ) : (
            <VideoItemDetailsFailureImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
              alt="failure view"
            />
          )}
          <VideoItemDetailsFailureHeading color={heading}>
            Oops! Something Went Wrong
          </VideoItemDetailsFailureHeading>
          <VideoItemDetailsFailurePara color={paragraph}>
            We are having some trouble to complete your request.
          </VideoItemDetailsFailurePara>
          <VideoItemDetailsFailurePara color={paragraph}>
            Please try again.
          </VideoItemDetailsFailurePara>
          <VideoItemDetailsFailureRetryBtn type="button">
            Retry
          </VideoItemDetailsFailureRetryBtn>
        </VideoItemDetailsFailureContainer>
      </>
    )
  }

  onLikeButton = () => {
    this.setState(prevState => ({
      isLike: !prevState.isLike,
    }))
  }

  renderVideosItemsSuccess = isDark => {
    const {isLike} = this.state
    const TitleAndName = isDark ? '#f9f9f9' : '#212121'
    const viewColor = isDark ? '#94a3b8' : '#475569'
    const bgColor = isDark ? '#000000' : '#f9f9f9'
    const desColor = isDark ? '#f9f9f9' : '#616e7c'
    const {videoItemDetails} = this.state
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
    } = videoItemDetails
    return (
      <VideoItemDivContainer color={bgColor}>
        <YoutubeVideoContainer>
          <ReactPlayer
            url={videoUrl}
            width="100%"
            height="100%"
            controls
            light={<img src={thumbnailUrl} alt="Thumbnail" />}
          />
        </YoutubeVideoContainer>{' '}
        <Title color={TitleAndName}>{title}</Title>
        <VideoViewsFiled color={viewColor}>
          <FlexItem>
            <VideoItemPara>{viewCount} views</VideoItemPara>
            <VideoItemPara>. {publishedAt}</VideoItemPara>
          </FlexItem>
          <VideoLikeFiled>
            <FlexItemContainer>
              <Button>
                <BiLike
                  size={20}
                  color={isDark ? '#94a3b8' : '#475569'}
                  onClick={this.onLikeButton}
                />
              </Button>
              <VideoItemPara>Like</VideoItemPara>
            </FlexItemContainer>
            <FlexItemContainer>
              <Button>
                <BiDislike
                  size={20}
                  color={isDark ? '#94a3b8' : '#475569'}
                  onClick={this.onLikeButton}
                />
              </Button>
              <VideoItemPara>DisLike</VideoItemPara>
            </FlexItemContainer>
            <FlexItemContainer>
              <Button>
                <MdPlaylistAdd
                  size={20}
                  color={isDark ? '#94a3b8' : '#475569'}
                />
              </Button>
              <VideoItemPara>Save</VideoItemPara>
            </FlexItemContainer>
          </VideoLikeFiled>
        </VideoViewsFiled>
        <hr />
        <YoutubeChannelContainer>
          <ProfileImg src={profileImageUrl} alt="logo" />
          <DescriptionContainer>
            <div>
              <Name color={TitleAndName}>{name}</Name>
              <SubscriberCount color={viewColor}>
                {subscriberCount} subscribers
              </SubscriberCount>
            </div>
            <div>
              <Description color={desColor}>{description}</Description>
            </div>
          </DescriptionContainer>
        </YoutubeChannelContainer>
      </VideoItemDivContainer>
    )
  }

  renderVideosItemsLoading = () => (
    <div className="loader-container">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderVideosItemView = isDark => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosItemsSuccess(isDark)
      case apiStatusConstants.failure:
        return this.renderVideosItemsFailure(isDark)
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
          const bgColor = isDark ? '#000000' : '#f9f9f9'
          return (
            <div>
              <Header />
              <VideoItemContainer>
                <SideBar />
                <VideoItemDetailsContainer color={bgColor}>
                  {this.renderVideosItemView(isDark)}
                </VideoItemDetailsContainer>
              </VideoItemContainer>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
