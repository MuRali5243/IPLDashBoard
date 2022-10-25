import Loader from 'react-loader-spinner'
import {Component} from 'react'
import Item from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {isLoader: false, list: []}

  componentDidMount() {
    this.getProducts()
  }

  getProducts = async () => {
    const promise = await fetch('https://apis.ccbp.in/ipl')
    const response = await promise.json()
    const {teams} = response

    const formatedData = teams.map(each => ({
      id: each.id,
      name: each.name,
      imageUrl: each.team_image_url,
    }))
    this.setState({isLoader: true, list: formatedData})
  }

  loader = () => (
    <div>
      <Loader type="Oval" color="#ffffff" height={50} />
    </div>
  )

  renderItems = () => {
    const {list} = this.state
    console.log(list)
    return (
      <ul className="list-ul-cont">
        {list.map(each => (
          <Item data={each} key={each.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoader, list} = this.state
    return (
      <div className="bg-cont">
        <div className="home-h-cont">
          <img
            className="ipl-logo"
            alt="ipl logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
          />
          <h1>IPL Dashboard</h1>
        </div>
        <div className="list-cont">
          {isLoader ? this.renderItems() : this.loader()}
        </div>
      </div>
    )
  }
}
export default Home
