import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const ViewsCont = styled.div`
  display: flex;
  flex-direction: row;
`
export const ViewsPara = styled.p`
  font-family: 'Roboto';
  //   line-height: 0.3;
  margin: 0px;
  color: ${props => props.color};
  font-weight: 450;
  margin-right: 10px;
`
export const Heading = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  width: 400px;
  font-weight: bold;
  margin-top: 0px;
  padding-top: 5px;
  text-decoration: none;
  color: ${props => props.color};
`
export const ThumbImage = styled.img`
  height: 200px;
`
export const VideoCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 70px;
  cursor: pointer;
  text-decoration: none;
`
export const VideoViewsCon = styled.div`
  line-height: 1.3;
`

export const VideoContent = styled.div`
  margin: 0px;
  margin-left: 30px;
  line-height: 1.7;
`
export const Linked = styled(Link)`
  text-decoration: none;
`
