import {Component} from 'react'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi2'
import {SiYoutubegaming} from 'react-icons/si'
import Header from '../Header'

class Home extends Component {
  state = {}

  renderRoutes = () => (
    <ul>
      <li>
        <AiFillHome />
        Home
      </li>
      <li>
        <HiFire />
        Trending
      </li>
      <li>
        <SiYoutubegaming />
        Gaming
      </li>
      <li>Saved videos</li>
    </ul>
  )

  render() {
    return (
      <div>
        <Header />
        <div>{this.renderRoutes()}</div>
      </div>
    )
  }
}
export default Home
