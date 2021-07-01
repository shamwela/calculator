import React, { Component } from 'react'
import './App.sass'

class App extends Component {
  state = {
    display: '',
  }

  displayError = () => {
    this.setState({ display: 'Error' })
  }

  handleChange = (e) => {
    e.preventDefault()
    const display = e.currentTarget.value
    this.setState({ display })
  }

  handleClear = (e) => {
    e.preventDefault()
    this.setState({ display: '' })
  }

  handlePlusMinus = (e) => {
    e.preventDefault()
    const display = this.state.display

    if (isNaN(Number(display))) {
      // if the display is not a number, it will return NaN
      this.displayError()
    } else {
      const result = -1 * display
      this.setState({ display: result })
    }
  }

  handlePercentage = (e) => {
    e.preventDefault()
    const display = this.state.display

    if (isNaN(Number(display))) {
      // if the display is not a number, it will return NaN
      this.displayError()
    } else {
      const result = display / 100
      this.setState({ display: result })
    }
  }

  handleInput = (e) => {
    e.preventDefault()
    const previousDisplay = this.state.display
    const newCharacter = e.currentTarget.value
    const display = previousDisplay + newCharacter
    this.setState({ display })
  }

  handleCalculate = (e) => {
    e.preventDefault()
    const display = this.state.display
    try {
      const result = eval(display.replace(/÷/g, '/').replace(/×/g, '*'))
      this.setState({ display: result })
    } catch (error) {
      this.displayError()
    }
  }

  render() {
    const { display } = this.state

    return (
      <div id='app'>
        <div id='calculator'>
          <input
            value={display}
            onChange={this.handleChange}
            type='text'
            id='display'
          />

          <button onClick={this.handleClear}>C</button>
          <button onClick={this.handlePlusMinus}>+/-</button>
          <button onClick={this.handlePercentage}>%</button>
          <button value=' ÷ ' onClick={this.handleInput} className='operator'>
            ÷
          </button>

          <div id='number-area'>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
              <button value={number} onClick={this.handleInput} key={number}>
                {number}
              </button>
            ))}
          </div>

          <button value=' × ' onClick={this.handleInput} className='operator'>
            ×
          </button>
          <button value=' - ' onClick={this.handleInput} className='operator'>
            -
          </button>
          <button value=' + ' onClick={this.handleInput} className='operator'>
            +
          </button>
          <button value='0' onClick={this.handleInput} id='zero'>
            0
          </button>
          <button value='.' onClick={this.handleInput}>
            .
          </button>
          <button onClick={this.handleCalculate} id='calculate'>
            =
          </button>
        </div>
      </div>
    )
  }
}

export default App
