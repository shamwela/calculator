import './App.sass';

function App() {
  return (
    <div id="app">
      <div id="calculator">
        <input type="text" id="display" />

        <button>AC</button>
        <button>+/-</button>
        <button>%</button>
        <button className="operator">÷</button>

        <div id="number-area">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
            <button key={number} className={number}>
              {number}
            </button>
          ))}
        </div>

        <button className="operator">x</button>
        <button className="operator">-</button>
        <button className="operator">+</button>
        <button id="zero">0</button>
        <button>.</button>
        <button className="operator">=</button>
      </div>
    </div>
  );
}

export default App;
