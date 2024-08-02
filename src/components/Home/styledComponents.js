import styled from 'styled-components'

export const HomeContainer = styled.div`
  height: 100vh;
  background-size: cover;
  background-color: ${props => props.theme};
  //   overflow: none;
  //   width: 100vw;
`

export const HomeDivContainer = styled.div`
  display: flex;
  flex-direction: row;

  height: 92vh;
`
export const BannerImg = styled.img`
  height: 40px;
`

export const BannerHeading = styled.p`
  font-family: 'Roboto';
  width: 320px;
  line-height: 1.9;
`
export const HomeVideoDivContainer = styled.div`
  overflow-y: scroll;
`

export const BannerBtn = styled.button`
  font-family: 'Roboto';
  border: 1px solid;
  background-color: transparent;
  height: 35px;
  width: 100px;
  font-weight: bold;
  cursor: pointer;
  //   padding-bottom: 20px;
  //   margin-bottom: 30px;
`
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  //   background-position-x: right;
  //   background-position-y: center;
  width: 85vw;
  height: 230px;
  padding-left: 30px;
  padding-top: 30px;
  //   padding-bottom: 30px;
  display: flex;
  flex-direction: row;
  //   justify-content: space-between;
  align-items: flex-start;
`
export const BannerDivContainer = styled.div`
  display: ${props => props.display};
`

export const RenderView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  //   overflow-y: scroll;
`

export const CloseContainer = styled.button`
  margin-left: 40%;
  background-color: transparent;
  border: 0px;
  //   background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  //   background-size: cover;
  //   height: 30%;
`
export const BannerOfferContainer = styled.div`
  padding-bottom: 30px;
`

export const BannerDivImg = styled.img`
  height: 200px;
  margin-left: 10px;
`
export const SearchInput = styled.input`
  height: 30px;
  width: 300px;
  outline: none;
  padding-left: 10px;
  background-color: ${props => props.inColor};
  border: 1px solid ${props => props.borderColor};
  border-right: none;
  //   border: 1px solid #cccccc;
`
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  //   border: 1px solid #cccccc;

  align-items: center;
`
export const SearchButton = styled.button`
  height: 30px;
  width: 70px;
  background-color: ${props => props.btnColor};
  text-align: center;
  //   border: 1px solid #cccccc;
  border: 1px solid ${props => props.borderColor};
  padding-top: 4px;
`

export const HomeVideosContainer = styled.div`
  padding: 30px;
`
export const UnOrderList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  //   width: 50vw;
  //   max-width: 100px;
  margin-top: 30px;
`
export const HomeLoadingView = styled.div``

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  //   height: 300px;
  line-height: 0.3;
`

export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => props.color};
`

export const FailurePara = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
`

export const RetryButton = styled.button`
  margin-top: 10px;
  width: 80px;
  height: 35px;
  font-family: 'Roboto';
  color: #f1f5f9;
  border-radius: 5px;
  border: none;
  background-color: #4f46e5;
`

export const FailureImg = styled.img`
  height: 300px;
`
export const NoResultsImg = styled.img`
  height: 300px;
`

export const NoResultHeading = styled.h1`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-size: 20px;
`

export const NoResultsParagraph = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-size: 15px;
`

export const NoResultRetryBtn = styled.button`
  margin-top: 10px;
  width: 80px;
  height: 35px;
  font-family: 'Roboto';
  color: #f1f5f9;
  border-radius: 5px;
  border: none;
  background-color: #4f46e5;
`
export const NoResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 576px) {
    margin-left: 250%;
  }
`
