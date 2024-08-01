import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const GameImg = styled.img`
  height: 300px;
  width: 250px;
`

export const GameCard = styled(Link)`
  margin-right: 20px;
  margin-bottom: 50px;
  cursor: pointer;
  text-decoration: none;
`
export const TitleCard = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-weight: 450;
  font-size: 15px;
`

export const ViewsCard = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  margin-top: 10px;
  font-size: 15px;
`
