import './index.css'

const MatchCard = props => {
  const {data} = props
  const {
    logo,

    result,

    status,
    team,
  } = data
  return (
    <li className="match-card-item">
      <img className="match-card-item-image" src={logo} alt={team} />
      <p>{team}</p>
      <p>{result}</p>
      <p>{status}</p>
    </li>
  )
}
export default MatchCard
