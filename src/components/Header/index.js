import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <nav className="navbar-container">
      <ul className="nav-list-container">
        <li className="nav-logo-container">
          <Link to="/" className="nav-link">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
              className="nav-logo"
            />
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/" className="nav-link">
            <h1 className="nav-header">Home</h1>
          </Link>
          <Link to="/jobs" className="nav-link">
            <h1 className="nav-header">Jobs</h1>
          </Link>
        </li>

        <li className="nav-button">
          <button
            type="button"
            className="logout-button"
            onClick={onClickLogout}
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default withRouter(Header)
