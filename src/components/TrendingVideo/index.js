import ThemeContext from '../../Context/ThemeContext'
import {
  ViewsCont,
  ViewsPara,
  Heading,
  VideoCardContainer,
  videoViewsCon,
  ThumbImage,
  VideoContent,
} from './styledComponents'

const TrendingVideo = props => {
  const {details} = props
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <VideoCardContainer>
            <ThumbImage src={details.thumbnailUrl} alt="img" />
            <VideoContent>
              <Heading>{details.title}</Heading>
              <videoViewsCon>
                <ViewsPara>{details.name}</ViewsPara>
                <ViewsCont>
                  <ViewsPara>{details.viewCount} Views</ViewsPara>
                  <ViewsPara> . {details.publishedAt}</ViewsPara>
                </ViewsCont>
              </videoViewsCon>
            </VideoContent>
          </VideoCardContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default TrendingVideo
