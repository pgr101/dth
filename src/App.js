import './App.css';
import './Styles/Button.css'
import head from './Assets/Kaws-companion-galerie-1.jpg';


function App() {
  return (
    <div className="App">
      <div className="container">
        <img className="Afbeelding" src={head}/>
        <div className="Home">Home</div>
        <div className="Library">Library</div>
        <div className="Trade">Trade</div>
        <div className="Faq">Faq</div>
        <div className="Login">Login</div>
        <div className="Toy1">Toy1</div>
        <div className="Toy2">Toy2</div>
        <div className="Toy3">Toy3</div>
        <div className="Profile">Profile</div>
        <div className="Socials">Socials</div>
        <div className="Footer">Footer</div>
      </div>

    </div>
  );
}

export default App;

