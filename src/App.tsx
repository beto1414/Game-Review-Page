import ListGroup from "./components/ListGroup/ListGroup";
import './App.css';


function App() {
  let items = ["New york", "cocuk", "hund"]
  
  return (
    <div>
      <ListGroup item={items} heading='Cities' onSelectItem={() => {}}/>
    </div>
  );
}

export default App;
