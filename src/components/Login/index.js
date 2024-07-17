import {Component} from 'react'
import Cookies from 'js-cookie'

import {
  LoginContainer,
  FormContainer,
  LogoImg,
  CustomLabel,
  CustomInput,
  CustomCheckLabel,
  LoginButton,
  LoginFields,
  CheckInput,
  ShowPassword,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    theme: 'light',
    username: '',
    password: '',
    errorMsg: '',
    showErrorMsg: false,
    showPassword: false,
  }

  onchangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onchangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeCheck = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {
      theme,
      username,
      password,
      showErrorMsg,
      errorMsg,
      showPassword,
    } = this.state

    const logoImg =
      theme === 'light'
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

    return (
      <LoginContainer theme={theme}>
        <FormContainer theme={theme}>
          <div>
            <LogoImg src={logoImg} alt="logo" />
          </div>
          <LoginFields onSubmit={this.onSubmitForm}>
            <CustomLabel htmlFor="username">USERNAME</CustomLabel>
            <CustomInput
              id="username"
              type="text"
              placeholder="Username"
              onChange={this.onchangeUsername}
              value={username}
            />
            <CustomLabel htmlFor="password">PASSWORD</CustomLabel>
            <CustomInput
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              onChange={this.onchangePassword}
              value={password}
            />
            <ShowPassword>
              <CheckInput type="checkbox" onChange={this.onChangeCheck} />
              <CustomCheckLabel>Show Password</CustomCheckLabel>
            </ShowPassword>
            <LoginButton type="submit">Login</LoginButton>
            {showErrorMsg && <ErrorMsg>*{errorMsg}</ErrorMsg>}
          </LoginFields>
        </FormContainer>
      </LoginContainer>
    )
  }
}

export default Login
