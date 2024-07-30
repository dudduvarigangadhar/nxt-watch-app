import {Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'
import Login from './components/Login'
import Home from './components/Home'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import Trending from './components/Trending'
import ThemeContext from './Context/ThemeContext'
import VideoItemDetails from './components/VideoItemDetails'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

class App extends Component {
  state = {isDark: false, activeId: 'HOME', savedVideos: []}

  changeTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  activeTabId = id => {
    this.setState({activeId: id})
  }

  onSavedVideos = details => {
    this.setState(prevState => ({
      savedVideos: [prevState.savedVideos, ...details],
    }))
  }

  render() {
    const {isDark, activeId, savedVideos} = this.state
    console.log('saved', savedVideos)
    return (
      <ThemeContext.Provider
        value={{
          isDark,
          activeId,
          savedVideos,
          activeTabItem: this.activeTabId,
          changeTheme: this.changeTheme,
          onSavedVideos: this.onSavedVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute path="/savedVideos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route exact path="not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
