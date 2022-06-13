// Write your JS code here
import {Component} from 'react'
import Header from '../Header'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="home-container">
          <div className="text-container">
            <h1 className="heading">Clothes that get you noticed</h1>
            <p className="paragraph">
              Fashion is part of the daily air and it does not quite help that
              is changes all the time . Clothes has always been a change maker
              in the era and we are in a revolution.Your fashion make you been
              seen heard that way you are. So,celebrate the seasons new new and
              exciting fashion in your own way.
            </p>
            <button className="button" type="button">
              Shop Now
            </button>
          </div>
          <div>
            <img
              className="display-image"
              alt="clothes that get you noticed"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Home
