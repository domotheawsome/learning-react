import './styles.css';
import Nav from "./components/Navbar.js"
import Hero from "./components/Hero.js"
import Card from "./components/Card.js"

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Card 
        img="katie.png"
        rating = "5.0"
        reviewCount={6}
        country="argentina"
        title="life lessons with katie zaferes"
        price ={136}
      />
    </div>
  );
}

export default App;
