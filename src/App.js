import React, { useState } from 'react'
import './App.sass'

const App = () => {
  const [display, setDisplay] = useState('')

  const displayError = () => {
    setDisplay('Error')
  }

  const handleChange = (e) => {
    e.preventDefault()
    const display = e.target.value
    setDisplay(display)
  }

  const handleClear = (e) => {
    e.preventDefault()
    setDisplay('')
  }

  const handleDelete = () => {
    // since the operators put white spaces around them, we need to trim
    const finalDisplay = display.trim().slice(0, -1)
    setDisplay(finalDisplay)
  }

  const handlePercentage = (e) => {
    e.preventDefault()
    if (isNaN(Number(display))) {
      // if the display is not a number, it will return NaN
      displayError()
    } else {
      const result = display / 100
      setDisplay(result)
    }
  }

  const handleInput = (e) => {
    e.preventDefault()
    const previousDisplay = display
    const newCharacter = e.currentTarget.value
    const newDisplay = previousDisplay + newCharacter
    setDisplay(newDisplay)
  }

  const handleCalculate = (e) => {
    e.preventDefault()

    try {
      // eslint-disable-next-line no-eval
      const result = eval(display.replace(/÷/g, '/').replace(/×/g, '*'))

      // because dividing by zero results in Infinity
      if (!isFinite(result)) {
        throw new Error()
      }

      setDisplay(result)
    } catch (error) {
      displayError()
    }
  }

  return (
    <div id='container'>
      <div id='calculator'>
        <input
          value={display}
          onChange={handleChange}
          type='text'
          id='display'
          aria-label='Display'
        />

        <button onClick={handleClear} className='misc'>
          C
        </button>
        <button onClick={handleDelete} className='misc'>
          D
        </button>
        <button onClick={handlePercentage} className='misc'>
          %
        </button>
        <button value=' ÷ ' onClick={handleInput} className='operator'>
          ÷
        </button>

        <div id='number-container'>
          {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'].map((number) => (
            <button
              value={number}
              onClick={handleInput}
              key={number}
              id={number === 0 ? 'zero' : null}
              className='number'
            >
              {number}
            </button>
          ))}
        </div>

        <button value=' × ' onClick={handleInput} className='operator'>
          ×
        </button>

        <button value=' - ' onClick={handleInput} className='operator'>
          -
        </button>

        <button value=' + ' onClick={handleInput} className='operator'>
          +
        </button>

        <button onClick={handleCalculate} id='calculate'>
          =
        </button>
      </div>
    </div>
  )
}

export default App
