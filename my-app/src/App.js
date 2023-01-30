import logo from './logo.svg';
import './App.css';

let name="Haxor";
function App() {
  return (
    <>
    <nav>
      <li>Home</li>
      <li>Skills</li>
      <li>Projects</li>
      </nav>
    
    <div className="container">
      <h1>Hello {name}</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, eligendi.</p>
    </div>
    </>
  );
}

export default App;
