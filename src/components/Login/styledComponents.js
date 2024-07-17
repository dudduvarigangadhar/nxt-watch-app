import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  //   background-color: #231f20;
  //   background-color:
`

export const FormContainer = styled.div`
  width: 330px;
  height: 400px;
  box-shadow: 8px 7px 30px #ebebeb;
  text-align: center;
  //   padding: 25px;
  padding-left: 30px;
  padding-top: 35px;
  //   padding-right: 35px;
`

export const LogoImg = styled.img`
  height: 35px;
  margin-bottom: 20px;
`

export const CustomLabel = styled.label`
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: bold;
  color: #64748b;
  margin-bottom: 6px;
  margin-top: 20px;
`

export const CustomInput = styled.input`
  width: 90%;
  height: 37px;
  border: 2px solid #94a3b4;
  border-radius: 3px;
  //   margin-top: 20px;
  padding-left: 10px;
  font-weight: bold;
`

export const CustomCheckLabel = styled.label`
  font-family: 'Roboto';
  font-weight: 500;
  color: #0f0f0f;
  padding-top: 10px;
`

export const CheckInput = styled.input`
  //   height: 40px;
  //   padding: 20px;
  height: 17px;
  width: 17px;
  //   width: 30px;
  margin-top: 15px;
  margin-right: 10px;
`
export const ShowPassword = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const LoginButton = styled.button`
  width: 90%;
  background-color: #3b82f6;
  color: #ffffff;
  margin-top: 20px;
  font-family: 'Roboto';
  border-radius: 8px;
  border: none;
  height: 40px;
  font-size: 15px;
  font-weight: bold;
`

export const LoginFields = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`
export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  color: #ff0000;
  margin: 0;
  font-size: 12px;
  margin-top: 3px;
`
