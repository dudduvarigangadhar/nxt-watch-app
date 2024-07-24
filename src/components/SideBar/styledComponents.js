import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ImageLogo = styled.img`
  height: 35px;
  margin-right: 10px;
`
export const Recommendations = styled.p`
  font-family: 'Roboto';
  color: #f1f5f9;
  font-size: 15px;
  width: 200px;
`
export const ListPara = styled.p`
  margin-left: 15px;
  font-weight: bold;
  color: ${props => props.color};
`

export const ContactContainer = styled.div`
  padding-bottom: 30px;
  padding-left: 10px;
  //   padding-left: 20px;
`

export const ContactUsHeading = styled.p`
  font-family: 'Roboto';
  color: #f9f9f9;
`
export const ListItem = styled.li`
  height: 35px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  background-color: ${props => props.isActive};
`
export const SideBarCon = styled.div`
  background-color: ${props => props.theme};
  height: 91.7vh;
  //   padding-left: 20px;
  max-width: 15%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`

export const UnorderedList = styled.ul`
  list-style-type: none;
  padding: 0px;
  width: 210px;
`
export const NavLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
`
