import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {isLoader: false, latMatch: {}, bann: {}, list: []}

  componentDidMount() {
    this.getBackend()
  }

  getBackend = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const Url = `https://apis.ccbp.in/ipl/${id}`
    const promise = await fetch(Url)
    const response = await promise.json()
    console.log(response)

    const banner = response.team_banner_url
    const l = response.latest_match_details
    const lD = {
      team: l.competing_team,
      logo: l.competing_team_logo,
      date: l.date,
      id: l.id,
      manOfMatch: l.man_of_the_match,
      status: l.match_status,
      result: l.result,
      sInnings: l.second_innings,
      firstInnings: l.first_innings,

      umpires: l.umpires,
      venue: l.venue,
    }

    const rM = response.recent_matches

    const recent = rM.map(each => ({
      team: each.competing_team,
      logo: each.competing_team_logo,
      date: each.date,
      id: each.id,
      manOfMatch: each.man_of_the_match,
      status: each.match_status,
      result: each.result,
      sInnings: each.second_innings,
      firstInnings: each.first_innings,
      umpires: each.umpires,
      venue: each.venue,
    }))
    console.log(recent)

    this.setState({isLoader: true, latMatch: lD, list: recent, bann: banner})
  }

  loader = () => (
    <div testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} />
    </div>
  )

  renderItems = () => {
    const {list, latMatch, bann} = this.state
    console.log(list)
    return (
      <div className="dis-cont">
        <img className="banner-image" src={bann} alt="team banner" />
        <h1>Latest matches</h1>
        <div className="latest-match">
          <LatestMatch data={latMatch} key={latMatch.id} />
        </div>
        <ul className="match-card">
          {list.map(each => (
            <MatchCard data={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoader} = this.state
    return (
      <div className="latest-match-cont">
        {isLoader ? this.renderItems() : this.loader()}
      </div>
    )
  }
}
export default TeamMatches
