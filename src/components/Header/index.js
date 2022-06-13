// Write your JS code here
import './index.css'

const Header = () => (
  <div className="header-bg-container">
    <div>
      <img
        className="logo-image"
        alt="website logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      />
    </div>
    <div className="button-container">
      <ul className="list-container">
        <li className="icon-text">Home</li>
        <li className="icon-text">Products</li>
        <li className="icon-text">Cart</li>
      </ul>
      <button className="button" type="button">
        Logout
      </button>
    </div>
  </div>
)

export default Header
