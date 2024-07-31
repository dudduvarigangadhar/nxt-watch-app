import styled from 'styled-components'
// import {FailureContainer} from '../Home/styledComponents'

export const TrendingSideBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 90vh;
`
export const FireLogoContainer = styled.div`
  height: 80px;
  border-radius: 50%;
  width: 80px;
  background-color: ${props => props.color};
  padding-left: 24px;
  padding-top: 25px;
  margin-left: 50px;
`
export const TrendingBlock = styled.div`
  background-color: ${props => props.color};
`

export const TrendingBlockContainer = styled.div`
  height: 130px;
  background-color: ${props => props.color};
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const TrendingHeading = styled.h1`
  font-family: 'Roboto';
  color: ${props => props.color};
  margin-left: 20px;
`
export const TrendingMidCon = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 92vh;
  overflow-y: scroll;
`
export const TrendingVideosList = styled.div`
  //   padding-left: 70px;
  text-decoration: none;
  margin-top: 60px;
`
export const TrendingViewContent = styled.div`
  background-color: ${props => props.color};
  padding-left: 60px;
  height: 100%;
`
export const TrendingFailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
  //   height: 300px;
  line-height: 0.3;
`

export const TrendingFailureImg = styled.img`
  height: 300px;
`

export const TrendingFailureHeading = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => props.color};
`

export const TrendingFailurePara = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
`

export const TrendingRetryButton = styled.button`
  margin-top: 10px;
  width: 80px;
  height: 35px;
  font-family: 'Roboto';
  color: #f1f5f9;
  border-radius: 5px;
  border: none;
  background-color: #4f46e5;
`
