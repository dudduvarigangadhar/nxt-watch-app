import Cookies from 'js-cookie'
import {Component} from 'react'

import Loader from 'react-loader-spinner/dist/loader'

import {IoMdSearch, IoIosClose} from 'react-icons/io'
// import {} from 'react-icons/io'
import SideBar from '../SideBar'
import HomeVideo from '../HomeVideo'
import Header from '../Header'
import ThemeContext from '../../Context/ThemeContext'
import {
  HomeContainer,
  UnorderedList,
  HomeDivContainer,
  BannerImg,
  BannerHeading,
  BannerBtn,
  BannerContainer,
  CloseContainer,
  BannerDivImg,
  SearchInput,
  SearchContainer,
  SearchButton,
  HomeVideosContainer,
  UnOrderList,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class Home extends Component {
  state = {
    homeVideos: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.renderHomeVideos()
  }

  renderHomeVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')
    // console.log(jwtToken)
    const apiUrl = 'https://apis.ccbp.in/videos/all?search='
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.videos.map(eachVideo => ({
        id: eachVideo.id,
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
      }))

      this.setState({
        homeVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    }
    if (response.status === 401) {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderFailureView = () => {}

  //   renderLoadingView = () => (
  //     <div className="loader-container">
  //       <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
  //     </div>
  //   )

  renderLoadingView = () => {}

  renderSuccessView = () => {
    const {homeVideos} = this.state
    return (
      <UnOrderList>
        {homeVideos.map(eachVideo => (
          <HomeVideo details={eachVideo} key={eachVideo.id} />
        ))}
      </UnOrderList>
    )
  }

  renderViewsList = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {homeVideos} = this.state
    // const renderMethod = this.renderViewsList()
    console.log(homeVideos)
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark, activeId, activeTabId} = value

          /* const textColor = isDark ? '#f9f9f9' : ' #7e858e' */

          /* const bgColor = isDark ? '#181818' : '#f9f9f9' */

          return (
            <HomeContainer data-testid="home">
              <Header />
              <HomeDivContainer>
                <div>
                  <BannerContainer>
                    <div>
                      <BannerImg
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <BannerHeading>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </BannerHeading>
                      <BannerBtn type="button">GET IT NOW</BannerBtn>
                    </div>
                    <CloseContainer>
                      <IoIosClose size={30} />
                    </CloseContainer>
                  </BannerContainer>
                  <HomeVideosContainer>
                    <SearchContainer>
                      <SearchInput type="text" placeholder="Search" />
                      <SearchButton data-testid="searchButton">
                        <IoMdSearch size={20} />
                      </SearchButton>
                    </SearchContainer>
                    {this.renderViewsList()}
                  </HomeVideosContainer>
                </div>
              </HomeDivContainer>
            </HomeContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Home
