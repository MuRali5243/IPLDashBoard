import {Link} from 'react-router-dom'
import './index.css'

const Item = props => {
  const {data} = props
  const {name, id, imageUrl} = data

  return (
    <Link to={`/team-matches/${id}`}>
      <li className="item-cont">
        <img className="team-img" src={imageUrl} alt={name} />
        <p>{name}</p>
      </li>
    </Link>
  )
}
export default Item
