import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import ThemeContext from '../../Context/ThemeContext'
import './index.css'

import {
  ThumbnailImg,
  ProfileImg,
  Title,
  VideoTitleContainer,
  VideoDetails,
  PublishedDiv,
  Published,
  ViewCount,
  CategoryName,
  VideosId,
} from './styledComponents'

const HomeVideo = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value
      const {details} = props
      const {
        thumbnailUrl,
        id,
        profileImageUrl,
        name,
        publishedAt,
        viewCount,
        title,
      } = details
      const date = String(formatDistanceToNow(new Date(publishedAt))).split(' ')
      const postedOn = date[1]
      const VideoTextColor = isDark ? '#f4f4f4' : '#475569'
      console.log(isDark)
      const ViewTextColor = isDark ? '#475569' : '#475569'

      return (
        <Link to={`/videos/${id}`}>
          <VideosId>
            <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
            <VideoDetails>
              <ProfileImg src={profileImageUrl} alt="channel logo" />
              <VideoTitleContainer>
                <Title color={VideoTextColor}>{title}</Title>
                <div>
                  <CategoryName color={ViewTextColor}>{name}</CategoryName>
                  <PublishedDiv>
                    <ViewCount color={ViewTextColor}>
                      {viewCount} views
                    </ViewCount>
                    <Published color={ViewTextColor}>
                      . {postedOn} years ago
                    </Published>
                  </PublishedDiv>
                </div>
              </VideoTitleContainer>
            </VideoDetails>
          </VideosId>
        </Link>
      )
    }}
  </ThemeContext.Consumer>
)

export default HomeVideo
