import './App.sass';

function App() {
  return (
    <div id="app">
      <form id="calculator">
        <input type="text" id="display" />
        <div>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
            <button key={number} className={number}>
              {number}
            </button>
          ))}
        </div>
      </form>
    </div>
  );
}

export default App;
