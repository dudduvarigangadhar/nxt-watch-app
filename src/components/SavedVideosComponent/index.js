import {MdPlaylistAdd} from 'react-icons/md'
import Header from '../Header'
import SideBar from '../SideBar'
import ThemeContext from '../../Context/ThemeContext'
import SavedVideoCard from '../SavedVideoCard'

import {
  SavedBlockContainer,
  SavedLogoContainer,
  SavedHeading,
  SavedVideosContainer,
  NoSavedVideoImg,
  NoVideosHeading,
  NoVideosParagraph,
  NoSavedVideosContainer,
  SavedContainer,
  SavedVideosDivContainer,
  SavedVideoRouteContainer,
} from './styledComponents'

const SavedVideosComponent = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark, savedVideos} = value
      const logoCon = isDark ? '#000000' : '#d7dfe9'
      const heading = isDark ? '#f1f5f9' : '#1e293b'
      const paragraph = isDark ? '#475569' : '#616e7c'
      const topContainer = isDark ? '#181818' : '#ebebeb'
      const bgColor = isDark ? '#0f0f0f' : '#f9f9f9'
      console.log(savedVideos)
      return (
        <SavedVideoRouteContainer>
          <Header />
          <SavedVideosContainer color={bgColor} data-testid="savedVideos">
            <SideBar />
            {savedVideos.length === 0 ? (
              <NoSavedVideosContainer>
                <NoSavedVideoImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="No Saved videos"
                />
                <NoVideosHeading color={heading}>
                  No saved videos found
                </NoVideosHeading>
                <NoVideosParagraph color={paragraph}>
                  Save your videos by clicking a button
                </NoVideosParagraph>
              </NoSavedVideosContainer>
            ) : (
              <SavedVideosDivContainer>
                <SavedBlockContainer color={topContainer}>
                  <SavedLogoContainer color={logoCon}>
                    <MdPlaylistAdd color="#ff0b37" size={30} />
                  </SavedLogoContainer>
                  <SavedHeading color={heading}>Saved Videos</SavedHeading>
                </SavedBlockContainer>
                <SavedContainer>
                  {savedVideos.map(eachVideo => (
                    <SavedVideoCard details={eachVideo} />
                  ))}
                </SavedContainer>
              </SavedVideosDivContainer>
            )}
          </SavedVideosContainer>
        </SavedVideoRouteContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default SavedVideosComponent
