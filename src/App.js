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

  handleDelete = (e) => {
    e.preventDefault()

    // since the operators put white spaces around them, we need to trim
    const display = this.state.display.trim().slice(0, -1).trim()

    this.setState({ display })
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

      // because dividing by zero results in Infinity
      if (!isFinite(result)) {
        throw new Error()
      }

      this.setState({ display: result })
    } catch (error) {
      this.displayError()
    }
  }

  render() {
    const { display } = this.state

    return (
      <div id='container'>
        <div id='calculator'>
          <input
            value={display}
            onChange={this.handleChange}
            type='text'
            id='display'
            aria-label='Display'
          />

          <button onClick={this.handleClear} className='misc'>
            C
          </button>
          <button onClick={this.handleDelete} className='misc'>
            D
          </button>
          <button onClick={this.handlePercentage} className='misc'>
            %
          </button>
          <button value=' ÷ ' onClick={this.handleInput} className='operator'>
            ÷
          </button>

          <div id='number-container'>
            {/* used this number order to improve UX */}
            {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'].map((number) => (
              <button
                value={number}
                onClick={this.handleInput}
                key={number}
                id={number === 0 ? 'zero' : null}
                className='number'
              >
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

          <button onClick={this.handleCalculate} id='calculate'>
            =
          </button>
        </div>
      </div>
    )
  }
}

export default App
