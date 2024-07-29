import ThemeContext from '../../Context/ThemeContext'

import {GameImg, GameCard, ViewsCard, TitleCard} from './styledComponents'

const GamingVideoCard = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value
      const viewValue = isDark ? '#94a3b8' : '#475569'
      const titleValue = isDark ? '#ffffff' : '#212121'
      const {details} = props
      return (
        <GameCard to={`/videos/${details.id}`}>
          <GameImg src={details.thumbnailUrl} alt="gaming video" />
          <TitleCard color={titleValue}>{details.title}</TitleCard>
          <ViewsCard color={viewValue}>
            {details.viewCount} Watching Worldwide
          </ViewsCard>
        </GameCard>
      )
    }}
  </ThemeContext.Consumer>
)

export default GamingVideoCard
