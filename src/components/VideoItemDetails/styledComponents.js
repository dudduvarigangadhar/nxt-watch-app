import styled from 'styled-components'

export const VideoItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 92vh;
`

export const VideoItemDetailsContainer = styled.div`
  background-color: ${props => props.color};
  width: 100%;
  height: 92vh;
  overflow-y: scroll;
`

export const VideoItemPara = styled.p`
  font-family: 'Roboto';
  //   color: ${props => props.color};
  margin-right: 5px;
`

export const FlexItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
  //   width: 800px;
`
export const VideoViewsFiled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 600px;
  color: ${props => props.color};
`

export const VideoLikeFiled = styled.div`
  display: flex;
  flex-direction: row;
`
export const VideoItemDivContainer = styled.div`
  width: 84vw;
  padding-left: 50px;
  padding-top: 50px;
  height: 100%;
  background-color: ${props => props.color};
`
export const YoutubeVideoContainer = styled.div`
  height: 400px;
  width: 800px;
`
export const ProfileImg = styled.img`
  height: 60px;
  border-radius: 50%;
  margin-top: 13px;
`

export const YoutubeChannelContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`

export const Description = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  width: 750px;
`
export const Name = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  margin: 0px;
`
export const Button = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
`

export const DisLikeButton = styled.button``

export const SaveVideoButton = styled.button

export const SubscriberCount = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
`

export const Title = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-size: 16px;
  font-weight: 450;
`
export const FlexItem = styled.div`
  display: flex;
  flex-direction: row;
`
export const DescriptionContainer = styled.div`
  margin-left: 20px;
`
export const VideoItemDetailsFailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
  //   height: 300px;
  line-height: 0.3;
`

export const VideoItemDetailsFailureImg = styled.img`
  height: 300px;
`

export const VideoItemDetailsFailureHeading = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => props.color};
`

export const VideoItemDetailsFailurePara = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
`

export const VideoItemDetailsFailureRetryBtn = styled.button`
  margin-top: 10px;
  width: 80px;
  height: 35px;
  font-family: 'Roboto';
  color: #f1f5f9;
  border-radius: 5px;
  border: none;
  background-color: #4f46e5;
`
