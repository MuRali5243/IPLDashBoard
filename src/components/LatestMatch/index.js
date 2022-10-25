import './index.css'

const LatestMatch = props => {
  const {data} = props
  const {
    date,
    logo,
    manOfMatch,
    firstInnings,
    result,
    sInnings,
    status,
    team,
    umpires,
    venue,
  } = data
  return (
    <div className="latest-matc-cont">
      <div className="first-cont">
        <p>{team}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <div>
        <img className="lat-match-img" src={logo} alt={team} />
      </div>
      <div className="first-cont">
        <p>First Innings</p>
        <p>{firstInnings}</p>
        <p>Second Innings</p>
        <p>{sInnings}</p>
        <p>Man Of The Match</p>
        <p>{manOfMatch}</p>
        <p>Umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
