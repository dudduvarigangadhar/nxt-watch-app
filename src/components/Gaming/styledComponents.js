import styled from 'styled-components'

export const GamingContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const GamingVideoCardContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const GamingBlock = styled.div`
  background-color: ${props => props.color};
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
export const GamingFailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
  //   height: 300px;
  line-height: 0.3;
`

export const GamingFailureImg = styled.img`
  height: 300px;
`

export const GamingFailureHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => props.color};
`

export const GamingFailurePara = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
`

export const GamingRetryButton = styled.button`
  margin-top: 10px;
  width: 80px;
  height: 35px;
  font-family: 'Roboto';
  color: #f1f5f9;
  border-radius: 5px;
  border: none;
  background-color: #4f46e5;
`
