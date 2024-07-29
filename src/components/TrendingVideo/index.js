import ThemeContext from '../../Context/ThemeContext'
import {
  ViewsCont,
  ViewsPara,
  Heading,
  VideoCardContainer,
  VideoViewsCon,
  ThumbImage,
  VideoContent,
  Linked,
} from './styledComponents'

const TrendingVideo = props => {
  const {details} = props
  const {id} = details
  return (
    <Linked to={`/videos/${id}`}>
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          const textColor = isDark ? '#f8fafc' : '#0f0f0f'
          const viewsColor = isDark ? '#475569' : '#616e7c'

          return (
            <VideoCardContainer>
              <ThumbImage src={details.thumbnailUrl} alt="img" />
              <VideoContent>
                <Heading color={textColor}>{details.title}</Heading>
                <VideoViewsCon>
                  <ViewsPara color={viewsColor}>{details.name}</ViewsPara>
                  <ViewsCont>
                    <ViewsPara color={viewsColor}>
                      {details.viewCount} views
                    </ViewsPara>
                    <ViewsPara color={viewsColor}>
                      {' '}
                      . {details.publishedAt}
                    </ViewsPara>
                  </ViewsCont>
                </VideoViewsCon>
              </VideoContent>
            </VideoCardContainer>
          )
        }}
      </ThemeContext.Consumer>
    </Linked>
  )
}

export default TrendingVideo
