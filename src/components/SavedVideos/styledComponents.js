import styled from 'styled-components'

export const SavedVideosContainer = styled.div`
  display: flex;
  flex-direction: row;
  //   align-items: center;
`

export const SavedBlockContainer = styled.div`
  height: 130px;
  background-color: ${props => props.color};
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const SavedLogoContainer = styled.div`
  height: 80px;
  border-radius: 50%;
  width: 80px;
  background-color: ${props => props.color};
  padding-left: 24px;
  padding-top: 25px;
  margin-left: 50px;
`

export const SavedHeading = styled.h1`
  font-family: 'Roboto';
  color: ${props => props.color};
  margin-left: 20px;
`
