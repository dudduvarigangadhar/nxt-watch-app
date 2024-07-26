import styled from 'styled-components'

export const TrendingSideBarContainer = styled.div`
  display: flex;
  flex-direction: row;
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
`
export const TrendingVideosList = styled.div`
  //   padding-left: 70px;
  margin-top: 60px;
`
export const TrendingViewContent = styled.div`
  background-color: ${props => props.color};
  padding-left: 60px;
`
