import styled from 'styled-components'

export const ThumbnailImg = styled.img`
  height: 150px;
`

export const ProfileImg = styled.img`
  height: 30px;
  margin-top: 15px;
`
export const Title = styled.p`
  font-family: 'Roboto';
  width: 230px;
  margin: 0;
  text-decoration: none;
  margin-bottom: 8px;
  color: ${props => props.color};
  font-weight: 420;
  font-size: 15px;
`

export const VideoDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`

export const VideoTitleContainer = styled.div`
  line-height: 1.5;
  margin-left: 10px;
  margin-top: 14px;
  margin-bottom: 30px;
  margin-right: 20px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 130px;
`
export const CategoryName = styled.p`
  font-family: 'Roboto';
  margin: 0;
  font-size: 14px;
  color: ${props => props.color};
  text-decoration: none;
`

export const Published = styled.p`
  font-family: 'Roboto';
  margin: 0;
  font-size: 15px;
  text-decoration: none;
  color: ${props => props.color};
`

export const ViewCount = styled.p`
  font-family: 'Roboto';
  margin: 0;
  margin-right: 7px;
  font-size: 15px;
  color: ${props => props.color};
  text-decoration: none;
`
export const PublishedDiv = styled.div`
  display: flex;
  flex-direction: row;
  text-decoration: none;
`
export const VideosId = styled.li`
  list-style-type: none;
  //   margin-bottom: 20px;
  //   margin-right: 20px;
  margin-right: 10px;
  //   height: 400px;
`
