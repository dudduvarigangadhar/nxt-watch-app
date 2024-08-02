import {Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'
import Login from './components/Login'
import Home from './components/Home'
import Gaming from './components/Gaming'
import SavedVideosComponent from './components/SavedVideosComponent'
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
    const {savedVideos} = this.state
    const index = savedVideos.findIndex(
      eachVideo => eachVideo.id === details.id,
    )
    if (index === -1) {
      this.setState({savedVideos: [...savedVideos, details]})
    } else {
      savedVideos.splice(index, 1)
      this.setState({
        savedVideos,
      })
    }
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
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute
            path="/saved-videos"
            component={SavedVideosComponent}
          />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
