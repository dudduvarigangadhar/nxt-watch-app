import styled from 'styled-components'

export const GamingContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const GamingVideoCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const GamingViewCon = styled.div`
  padding-left: 30px;
  padding-top: 30px;
  background-color: ${props => props.color};
`
export const GamingHeadingCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.color};
  width: 100%;
  height: 130px;
`
export const DivContainer = styled.div`
  height: 92vh;
  overflow-y: scroll;
`
export const GamingLogoCon = styled.div`
  height: 80px;
  border-radius: 50%;
  width: 80px;
  background-color: ${props => props.color};
  padding-left: 24px;
  padding-top: 25px;
  margin-left: 50px;
`
export const GamingSuccessViewContainer = styled.div``

export const GamingMidContainer = styled.div``

export const GamingHeading = styled.h1`
  color: ${props => props.color};
  font-family: 'Roboto';
  margin-left: 20px;
`
