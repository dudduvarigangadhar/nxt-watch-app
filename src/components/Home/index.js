import Cookies from 'js-cookie'
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import {IoMdSearch, IoIosClose} from 'react-icons/io'
// import {} from 'react-icons/io'
import SideBar from '../SideBar'
import HomeVideo from '../HomeVideo'
import Header from '../Header'
import ThemeContext from '../../Context/ThemeContext'
import {
  HomeContainer,
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
  BannerOfferContainer,
  UnOrderList,
  HomeLoadingView,
  FailureContainer,
  FailureHeading,
  FailurePara,
  FailureImg,
  RetryButton,
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
    console.log(response.status)
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
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderFailureView = isDark => {
    const heading = isDark ? '#f9f9f9' : '#1e293b'
    const paragraph = isDark ? '#475569' : '#616e7c'
    return (
      <>
        <FailureContainer>
          {isDark ? (
            <FailureImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
              alt="failure view"
            />
          ) : (
            <FailureImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
              alt="failure view"
            />
          )}
          <FailureHeading color={heading}>
            Oops! Something Went Wrong
          </FailureHeading>
          <FailurePara color={paragraph}>
            We are having some trouble to complete your request.
          </FailurePara>
          <FailurePara color={paragraph}>Please try again.</FailurePara>
          <RetryButton type="button">Retry</RetryButton>
        </FailureContainer>
      </>
    )
  }

  renderLoadingView = () => {
    console.log('loading view')
    return (
      <HomeLoadingView className="loader-container">
        <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
      </HomeLoadingView>
    )
  }

  //   renderLoadingView = () => {}

  renderSuccessView = () => {
    const {homeVideos} = this.state
    console.log('success view')
    return (
      <UnOrderList>
        {homeVideos.map(eachVideo => (
          <HomeVideo details={eachVideo} key={eachVideo.id} />
        ))}
      </UnOrderList>
    )
  }

  renderViewsList = isDark => {
    const {apiStatus} = this.state
    // const theme = props
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView(isDark)
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {homeVideos} = this.state
    // const renderMethod = this.renderViewsList()
    // console.log(homeVideos)
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark, activeId, activeTabId} = value

          const textColor = isDark ? '#f9f9f9' : ' #181818'

          const bgColor = isDark ? '#181818' : '#f9f9f9'
          console.log('Home', isDark)
          return (
            <HomeContainer>
              <Header />
              <HomeDivContainer theme={bgColor}>
                <SideBar />
                <div>
                  <BannerContainer>
                    <BannerOfferContainer>
                      <BannerImg
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <BannerHeading>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </BannerHeading>
                      <BannerBtn type="button">GET IT NOW</BannerBtn>
                    </BannerOfferContainer>
                    <CloseContainer>
                      <IoIosClose size={30} />
                    </CloseContainer>
                  </BannerContainer>
                  <HomeVideosContainer>
                    <SearchContainer>
                      <SearchInput
                        type="text"
                        placeholder="Search"
                        inColor={bgColor}
                        borderColor={isDark ? '#7e858e' : '#ebebeb'}
                      />
                      <SearchButton
                        data-testid="searchButton"
                        btnColor={isDark ? '#383838' : '#f4f4f4'}
                        borderColor={isDark ? '#7e858e' : '#ebebeb'}
                      >
                        <IoMdSearch size={20} color="#616e7c" />
                      </SearchButton>
                    </SearchContainer>
                    {this.renderViewsList(isDark)}
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
