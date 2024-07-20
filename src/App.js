import {Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'
import Login from './components/Login'
import Home from './components/Home'
import NotFound from './components/NotFound'
import ThemeContext from './Context/ThemeContext'

import './App.css'

class App extends Component {
  state = {isDark: false, activeId: ''}

  changeTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  activeTabId = id => {
    this.setState({activeId: id})
  }

  render() {
    const {isDark, activeId} = this.state
    console.log(isDark)
    return (
      <ThemeContext.Provider
        value={{
          isDark,
          activeId,
          activeTabId: this.activeTabId,
          changeTheme: this.changeTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          {/* <Route exact path="not-found" component={NotFound} /> */}
          {/* <Redirect to="/not-found" /> */}
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
