import {Component} from 'react'
import Header from '../Header'
import SideBar from '../SideBar'

class Gaming extends Component {
  state = {}

  render() {
    return (
      <div>
        <Header />
        <div>
          <SideBar />
        </div>
      </div>
    )
  }
}

export default Gaming
