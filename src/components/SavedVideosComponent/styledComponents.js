import styled from 'styled-components'

export const SavedVideosContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props => props.color};
  //   align-items: center;
`

export const SavedBlockContainer = styled.div`
  height: 130px;
  background-color: ${props => props.color};
  width: 100%;
  display: flex;
  //   height: 80vh;
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
export const NoSavedVideoImg = styled.img`
  height: 300px;
`
export const NoVideosHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => props.color};
`

export const NoVideosParagraph = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
`
export const NoSavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 30%;
`
export const SavedVideosDivContainer = styled.div`
  width: 89vw;
  height: 90vh;
  overflow-y: scroll;
`
export const SavedContainer = styled.ul`
  //   overflow-y: scroll;
`
export const SavedVideoRouteContainer = styled.div`
  height: 100vh;
  background-color: ${props => props.color};
`
