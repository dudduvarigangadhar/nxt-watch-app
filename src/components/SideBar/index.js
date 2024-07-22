import {AiFillHome, AiFillFire} from 'react-icons/ai'
// import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import {
  UnorderedList,
  ListItem,
  ContactContainer,
  ContactUsHeading,
  ImageLogo,
  Recommendations,
  SideBarCon,
} from './styledComponents'

const onChangeHomeRoute = () => {
  activeTabId('HOME')
  console.log('Home')
}

const onChangeTrendingRoute = () => {
  activeTabId('Trending')
  console.log('trending')
}

const onChangeGamingRoute = () => {
  activeTabId('Gaming')
  console.log('gaming')
}

const onChangeSavedVideosRoute = () => {
  activeTabId('SavedVideos')

  console.log('saved')
}

const SideBar = () => (
  <SideBarCon>
    <UnorderedList>
      <ListItem id="HOME" onClick={onChangeHomeRoute}>
        <AiFillHome size={20} />
        <ListPara>Home</ListPara>
      </ListItem>
      <ListItem id="Trending" onClick={onChangeTrendingRoute}>
        <AiFillFire size={20} />
        <ListPara>Trending</ListPara>
      </ListItem>
      <ListItem id="Gaming" onClick={onChangeGamingRoute}>
        <SiYoutubegaming size={20} />
        <ListPara>Gaming</ListPara>
      </ListItem>
      <ListItem id="Saved videos" onClick={onChangeSavedVideosRoute}>
        <MdPlaylistAdd size={20} />
        <ListPara> Saved videos </ListPara>
      </ListItem>
    </UnorderedList>
    <ContactContainer>
      <ContactUsHeading>CONTACT US</ContactUsHeading>
      <div>
        <ImageLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
          alt="facebook logo"
        />
        <ImageLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
          alt="twitter logo"
        />
        <ImageLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
          alt="linked in logo"
        />
      </div>
      <Recommendations>
        Enjoy! Now to see your channels and recommendations!
      </Recommendations>
    </ContactContainer>
  </SideBarCon>
)

export default SideBar
