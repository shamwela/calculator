import React, { Component } from 'react'
import './App.sass'

class App extends Component {
  state = {
    display: '',
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
    let display = -1 * this.state.display
    if (isNaN(display)) {
      display = 'Error'
    }
    this.setState({ display })
  }

  handleInput = (e) => {
    e.preventDefault()
    let display = this.state.display
    display = display += e.currentTarget.value
    this.setState({ display })
  }

  handleCalculate = (e) => {
    e.preventDefault()
    const display = this.state.display
    let result
    try {
      result = eval(display)
    } catch (error) {
      result = 'Error'
    }
    this.setState({ display: result })
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
          <button onClick={this.handlePlusMinus}>%</button>
          <button className='operator'>÷</button>

          <div id='number-area'>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
              <button value={number} onClick={this.handleInput} key={number}>
                {number}
              </button>
            ))}
          </div>

          <button className='operator'>x</button>
          <button className='operator'>-</button>
          <button value=' + ' onClick={this.handleInput} className='operator'>
            +
          </button>
          <button id='zero'>0</button>
          <button>.</button>
          <button onClick={this.handleCalculate} id='calculate'>
            =
          </button>
        </div>
      </div>
    )
  }
}

export default App
