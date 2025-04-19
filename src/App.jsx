import React, {useState} from "react";
import TourCard from "./components/TourCard";
import Gallery from "./components/Gallery";
import "./styles/styles.css";

//Root component of the app
function App () {
  //Global state to manage the list of tours
  const [tours, setTours] = useState([]);

  //Function to remove a tour from the list
  const onRemove = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  return (
    <main>
      <h1>Tour List</h1>
      {/* Pass state and handlers down to the Gallery Component */}
      <Gallery tours={tours} setTours={setTours} onRemove={onRemove}/>
     
    </main>
  )
}

export default App;