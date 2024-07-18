import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} alt="logo" className="App-logo img-fluid" />
        </header>
        <main>
          <Dictionary defaultKeyword="cat" />
        </main>{" "}
        <footer className="App-footer">
          <small>Coded by Cherry Atkinson</small>
        </footer>
      </div>
    </div>
  );
}
