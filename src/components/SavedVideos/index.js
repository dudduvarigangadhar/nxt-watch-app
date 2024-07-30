import {Component} from 'react'
import {MdPlaylistAdd} from 'react-icons/md'
import Header from '../Header'
import SideBar from '../SideBar'
import ThemeContext from '../../Context/ThemeContext'

import {
  SavedBlockContainer,
  SavedLogoContainer,
  SavedHeading,
  SavedVideosContainer,
} from './styledComponents'

class SavedVideos extends Component {
  state = {}

  render() {
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
              <SavedVideosContainer>
                <SideBar />
                <SavedBlockContainer color={topContainer}>
                  <SavedLogoContainer color={logoCon}>
                    <MdPlaylistAdd color="#ff0b37" size={30} />
                  </SavedLogoContainer>
                  <SavedHeading color={heading}>Saved Videos</SavedHeading>
                </SavedBlockContainer>
              </SavedVideosContainer>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SavedVideos
