import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  // fix: initialize the state with values mangoesCount:4, bananacount:5 to update as below
  state = {bananasCount: 5, mangoesCount: 4}

  // fix: class method is defined using arrow function
  onClickEatBanana = () => {
    this.setState(prevState => ({bananasCount: prevState.bananasCount + 1}))
  }

  // fix: class method is defined using arrow function
  onClickEatMango = () => {
    this.setState(prevState => ({mangoesCount: prevState.mangoesCount + 1}))
  }

  render() {
    // fix: the state should be accessed using 'this'
    const {bananasCount, mangoesCount} = this.state

    return (
      // fix: renamed all class as className

      <div className="app-container">
        <div className="fruits-counter">
          <h1 className="count-text">
            Bob ate <span className="count">{mangoesCount}</span> mangoes
            <span className="count"> {bananasCount}</span> bananas
          </h1>
          <div className="counters-control-container">
            <div className="counter-control">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                // fix: the alt attribute of the image should be 'mango'
                alt="mango"
                className="fruit-image"
              />
              <div className="button-container">
                <button
                  type="button"
                  className="button"
                  // fix: the event handler should be passed as a reference to the onClick attribute
                  onClick={this.onClickEatMango}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="counter-control">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="fruit-image"
              />
              <div className="button-container">
                <button
                  type="button"
                  className="button"
                  // fix: the event handler should be passed as a reference to the onClick attribute
                  onClick={this.onClickEatBanana}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
