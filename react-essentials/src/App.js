import logo from './logo.svg';
import './App.css';

function Header() {
  return (
    <header>
      <h1>
        Maneesh
      </h1>
    </header>
  )
}

function Content() {
  return (
    <section>
      <p> This is the main content </p>
    </section>
  )
}

function Footer() {
  return (
    <footer>
      <p> This is the footer </p>
    </footer>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer/>
    </div>
  );
}

export default App;
