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

export const CancelBtn = styled.button`
  color: ${props => props.color};
  background-color: transparent;
  border: 1px solid grey;
  padding: 8px;
  padding-right: 12px;
  padding-left: 12px;
  color: grey;
  margin: 12px;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 12px;
`

export const ConfirmBtn = styled.button`
  background-color: #3b82f6;
  align-self: flex-end;
  color: white;
  padding: 8px;
  padding-right: 12px;
  padding-left: 12px;
  border: 1px solid #3b82f6;
  margin: 12px;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 12px;
`

export const PopUpContainer = styled.div`
  width: 270px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  padding: 20px;
  background-color: ${props => props.color};
`
export const PopUpMessage = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-size: 15px;
  color: black;
  text-align: center;
`
export const ModalDesc = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
`
export const ButtonsCon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const ThemeButton = styled.div`
  background-color: transparent;
  border: none;
`
