import {formatDistanceToNow} from 'date-fns'
import ThemeContext from '../../Context/ThemeContext'

import {
  LinkTo,
  ViewsContainer,
  VideoCardContainer,
  SavedImg,
  SavedVideoTitle,
  SavedVideoName,
  SavedViewCount,
  SavedVideoPublished,
} from './styledComponents'

const SaveVideoCard = props => {
  const {details} = props
  const {id, name, publishedAt, thumbnailUrl, title, viewCount} = details
  const date = String(formatDistanceToNow(new Date(publishedAt))).split(' ')
  const postedOn = date[1]
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value

        const titleColor = isDark ? '#f1f5f9' : '#1e293b'
        const viewColor = isDark ? '#475569' : '#616e7c'

        return (
          <LinkTo to={`/videos/${id}`}>
            <SavedImg src={thumbnailUrl} alt="video thumbnail" />
            <VideoCardContainer>
              <SavedVideoTitle color={titleColor}>{title}</SavedVideoTitle>
              <SavedVideoName color={viewColor}>{name}</SavedVideoName>
              <ViewsContainer>
                <SavedViewCount color={viewColor}>
                  {viewCount} views{' '}
                </SavedViewCount>
                <SavedVideoPublished color={viewColor}>
                  {'  '}. {postedOn}
                </SavedVideoPublished>
              </ViewsContainer>
            </VideoCardContainer>
          </LinkTo>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default SaveVideoCard
