import styled from 'styled-components'

export const NotFoundImg = styled.img`
  height: 300px;
`

export const NotFoundHeading = styled.h1`
  font-family: 'Roboto';
  color: ${props => props.color};
`

export const NotFoundPara = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
`

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background-color: ${props => props.color};
`
export const NotFoundImgContainer = styled.div`
  margin-left: 250px;
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
