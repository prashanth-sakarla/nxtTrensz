// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {nameInput: '', passwordInput: ''}

  onUpdateName = event => {
    this.setState({nameInput: event.target.value})
  }

  onUpdatePassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.push('/')
  }

  onSubmitApiRequest = async event => {
    event.preventDefault()
    const {nameInput, passwordInput} = this.state
    const userDetails = {nameInput, passwordInput}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess()
    }
  }

  renderInputNameElement = () => {
    const {nameInput} = this.state
    return (
      <div className="input-element">
        <label htmlFor="name">USERNAME</label>
        <div className="input-container">
          <input
            onChange={this.onUpdateName}
            value={nameInput}
            className="input"
            id="name"
            type="text"
            placeholder="Username"
          />
        </div>
      </div>
    )
  }

  renderInputPasswordElement = () => {
    const {passwordInput} = this.state
    return (
      <div className="input-element">
        <label htmlFor="password">PASSWORD</label>
        <div className="input-container">
          <input
            onChange={this.onUpdatePassword}
            value={passwordInput}
            className="input"
            id="password"
            type="password"
            placeholder="Password"
          />
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="login-bg-container">
        <div className="login-image-container">
          <img
            className="login-icon-image"
            alt="website login"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          />
        </div>
        <div className="login-card">
          <img
            className="login-card-logo"
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          />
          <form onSubmit={this.onSubmitApiRequest} className="form-container">
            {this.renderInputNameElement()}
            {this.renderInputPasswordElement()}
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
