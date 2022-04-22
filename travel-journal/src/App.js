import './styles.css';
import Navbar from './components/Navbar';
import data from "./data"
import Card from './components/Card';


const items = data.map(item => {
  return(
    <Card
      key={item.id}
      {...item}
    />
  )

})

function App() {

  return (
    <div>
      <Navbar />
      <div className='cards--list'>
        {items}
      </div>
    </div>
  );
}

export default App;
