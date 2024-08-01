import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LinkTo = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  text-decoration: none;
  align-items: flex-start;
  padding-left: 30px;
  padding-top: 30px;
  cursor: pointer;
`
export const ViewsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  //   margin: 0px;
`

export const VideoCardContainer = styled.div`
  margin-left: 20px;
`
export const SavedImg = styled.img`
  height: 200px;
  width: 400px;
`
export const SavedVideoTitle = styled.p`
  font-family: 'Roboto';
  font-weight: 450;
  color: ${props => props.color};
`

export const SavedVideoName = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  //   font-size: 15px;
`
export const SavedViewCount = styled.p`
  font-family: 'Roboto';

  color: ${props => props.color};
  font-size: 15px;
  margin: 0;
  //   width: 50px;
`
export const SavedVideoPublished = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  margin-left: 15px;
  margin: 0;

  color: ${props => props.color};
`
