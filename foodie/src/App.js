import logo from './logo.svg';
import './App.css';
import data from './data.json'
import RestaurantDetails from './components/restaurantDetail';

function App() {
  return (
      <div>
        < RestaurantDetails data={data}/>
      </div>
    

  );
}

export default App;
