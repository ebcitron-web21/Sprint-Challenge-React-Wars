import React, {useEffect} from 'react';
import axios from 'axios';
import Cardlist from './components/Cardlist';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [state, setState] = useState();
  
  const url = 'https://swapi.co/api/people/';

  useEffect(() => {
    axios
    .get(url)
    .then(res => setState(res.data.results))
    .catch(err => console.log("Catch Error Retrieving API results: ", err));

  })

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Cardlist characters = {state} />
    </div>
  );
}

export default App;
