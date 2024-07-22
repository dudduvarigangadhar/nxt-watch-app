import {Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'
import Login from './components/Login'
import Home from './components/Home'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import Trending from './components/Trending'
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
          <Route exact path="/trending" component={Trending} />
          <Route exact path="/gaming" component={Gaming} />
          <Route path="/savedvideos" component={SavedVideos} />
          {/* <Route exact path="not-found" component={NotFound} /> */}
          {/* <Redirect to="/not-found" /> */}
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
