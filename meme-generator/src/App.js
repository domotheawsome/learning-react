import './styles.css';
import Nav from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import Card from "./components/Card.js";
import data from "./data.js";

const card = data.map(items => {
  return(
    <Card
      key={items.id}
      {...items}
      //img={items.coverImg}
      //rating={items.stats.rating}
      //reviewCount={items.stats.reviewCount}
      //country={items.location}
      //title={items.title}
      //price={items.price}
      //openSpots={items.openSpots}
    />

  )

})
function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <section className='cards-list'>
        {card}
      </section>
    </div>
  );
}

export default App;
