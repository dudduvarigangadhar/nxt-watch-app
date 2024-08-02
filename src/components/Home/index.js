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
  NoResultsImg,
  NoResultHeading,
  NoResultsParagraph,
  NoResultRetryBtn,
  NoResultsContainer,
  BannerDivContainer,
  HomeVideoDivContainer,
  RenderView,
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
    searchInput: '',
    display: 'flex',
  }

  componentDidMount() {
    this.renderHomeVideos()
  }

  renderHomeVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')
    const {searchInput} = this.state
    // console.log(jwtToken)
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    // const apiUrl = ``
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    // console.log(response.status)
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

  onRetry = () => {
    this.setState({}, this.renderHomeVideos)
  }

  renderFailureView = isDark => {
    const heading = isDark ? '#f9f9f9' : '#1e293b'
    const paragraph = isDark ? '#475569' : '#616e7c'
    return (
      <>
        <FailureContainer>
          {isDark ? (
            <FailureImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
              alt="failure view"
            />
          ) : (
            <FailureImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
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
          <RetryButton type="button" onClick={this.onRetry}>
            Retry
          </RetryButton>
        </FailureContainer>
      </>
    )
  }

  renderLoadingView = () => (
    <HomeLoadingView className="loader-container">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </HomeLoadingView>
  )

  //   renderLoadingView = () => {}

  renderSuccessView = isDark => {
    const {homeVideos} = this.state

    const resultHeading = isDark ? '#f9f9f9' : '#1e293b'
    const resultPara = isDark ? '#475569' : '#616e7c'

    return (
      <UnOrderList>
        {homeVideos.length !== 0 &&
          homeVideos.map(eachVideo => (
            <HomeVideo details={eachVideo} key={eachVideo.id} />
          ))}
        {homeVideos.length === 0 && (
          <NoResultsContainer>
            <NoResultsImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no search results"
            />
            <NoResultHeading color={resultHeading}>
              No Search results found
            </NoResultHeading>
            <NoResultsParagraph color={resultPara}>
              Try different key words or remove search filter
            </NoResultsParagraph>
            <NoResultRetryBtn type="button" onClick={this.onRetry}>
              Retry
            </NoResultRetryBtn>
          </NoResultsContainer>
        )}
      </UnOrderList>
    )
  }

  renderViewsList = isDark => {
    const {apiStatus} = this.state
    // const theme = props
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView(isDark)
      case apiStatusConstants.failure:
        return this.renderFailureView(isDark)
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onSearchVideos = () => {
    const {searchInput} = this.state
    this.setState({searchInput}, this.renderHomeVideos)
  }

  RemoveBanner = () => {
    this.setState(
      {
        display: 'none',
      },
      //   this.renderHomeVideos,
    )
  }

  render() {
    const {homeVideos} = this.state
    // const renderMethod = this.renderViewsList()
    // console.log(homeVideos)
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark, activeId, activeTabId} = value
          const {searchInput, display} = this.state
          const textColor = isDark ? '#f9f9f9' : ' #181818'

          const bgColor = isDark ? '#181818' : '#f9f9f9'

          return (
            <HomeContainer data-testid="home" theme={bgColor}>
              <Header />
              <HomeDivContainer>
                <SideBar />

                <HomeVideoDivContainer>
                  <BannerDivContainer display={display} data-testid="banner">
                    <BannerContainer>
                      <BannerOfferContainer>
                        <BannerImg
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <BannerHeading>
                          Buy Nxt Watch Premium prepaid plans with <br /> UPI
                        </BannerHeading>
                        <BannerBtn type="button">GET IT NOW</BannerBtn>
                      </BannerOfferContainer>
                      <CloseContainer>
                        <IoIosClose
                          size={30}
                          onClick={this.RemoveBanner}
                          data-testid="close"
                        />
                      </CloseContainer>
                    </BannerContainer>
                  </BannerDivContainer>
                  <HomeVideosContainer>
                    <SearchContainer>
                      <SearchInput
                        type="text"
                        placeholder="Search"
                        inColor={bgColor}
                        borderColor={isDark ? '#7e858e' : '#ebebeb'}
                        onChange={this.onChangeSearchInput}
                        value={searchInput}
                      />
                      <SearchButton
                        data-testid="searchButton"
                        btnColor={isDark ? '#383838' : '#f4f4f4'}
                        borderColor={isDark ? '#7e858e' : '#ebebeb'}
                        onClick={this.onSearchVideos}
                      >
                        <IoMdSearch size={20} color="#616e7c" />
                      </SearchButton>
                    </SearchContainer>
                    <RenderView>{this.renderViewsList(isDark)}</RenderView>
                  </HomeVideosContainer>
                </HomeVideoDivContainer>
              </HomeDivContainer>
            </HomeContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Home
