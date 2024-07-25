import styled from 'styled-components'

export const HomeContainer = styled.div``

export const HomeDivContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props => props.theme};
`
export const BannerImg = styled.img`
  height: 40px;
`

export const BannerHeading = styled.p`
  font-family: 'Roboto';
  width: 320px;
  line-height: 1.9;
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
export const CloseContainer = styled.div`
  margin-left: 40%;
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
  flex-wrap: wrap;
  //   max-width: 100px;
  margin-top: 30px;
`
