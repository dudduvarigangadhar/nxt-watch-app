import './index.css'

import {Link} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'

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
  videosId,
} from './styledComponents'

const HomeVideo = props => {
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
  return (
    <Link to="/id" className="link">
      <videosId>
        <ThumbnailImg src={thumbnailUrl} alt="thumbnail" />
        <VideoDetails>
          <ProfileImg src={profileImageUrl} alt="profile" />
          <VideoTitleContainer>
            <Title>{title}</Title>
            <CategoryName>{name}</CategoryName>
            <PublishedDiv>
              <ViewCount>{viewCount} views</ViewCount>
              <Published>. {postedOn} years ago</Published>
            </PublishedDiv>
          </VideoTitleContainer>
        </VideoDetails>
      </videosId>
    </Link>
  )
}

export default HomeVideo
