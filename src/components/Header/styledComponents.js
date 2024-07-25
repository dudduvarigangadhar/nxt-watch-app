import styled from 'styled-components'

export const LogoImg = styled.img`
  height: 30px;
`
export const ProfileImg = styled.img`
  height: 27px;
`
export const LogoutBtn = styled.button`
  height: 30px;
  width: 85px;
  background-color: transparent;
  font-family: 'Roboto';
  border: 2px solid ${props => props.color};
  color: ${props => props.color};
  font-weight: 600;
  cursor: pointer;
  border-radius: 3px;
  font-size: 15px;
`

export const LogoBtn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  padding-left: 35px;
  padding-right: 20px;
  padding-bottom: 15px;
  //   margin-bottom: 15px;
  //   background-color: #231f20;
  background-color: ${props => props.theme};
  //   background-color: ${props => (props.theme ? '#181818' : '#f9f9f9')};
`
export const HeaderProfile = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  justify-content: space-evenly;
`
