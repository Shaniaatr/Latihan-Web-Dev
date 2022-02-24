import logo from './nia.PNG';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className='title1'>Tri Rizky Shania</h1>
        <section>
     <p className="idContent1">
      Tri Rizky Shania<br />
      JL. Bangka Raya, Jaksel <br />
      Shinenia26@gmail.com
      </p>
    </section>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
