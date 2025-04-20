import React, { useState } from "react";
import Gallery from "./components/Gallery";
import DestinationSelector from "./components/DestinationSelector";
import "./styles/styles.css";

//Root component of the app
function App() {
  //Global state to manage the list of tours
  const [tours, setTours] = useState([]);
  const [filteredTours, setFilteredTours] = useState([]);

  //Function to remove a tour from the list
  const onRemove = (id) => {
    setFilteredTours(filteredTours.filter((tour) => tour.id !== id));
  };

  //Function to handle destination filtering
  const onDestinationChange = (destination) => {
    if (destination === "All Destinations") {
      setFilteredTours(tours); // Show all tours
    } else {
      setFilteredTours(tours.filter((tour) => tour.name === destination));
    }
  };

  return (
    <main>
      <h1>Tour List</h1>
      {/* Render the DestinationSelector */}
      <DestinationSelector tours={tours} onDestinationChange={onDestinationChange} />
      {/* Pass filtered tours to the Gallery */}
      <Gallery tours={filteredTours.length ? filteredTours : tours} setTours={setTours} onRemove={onRemove} />
    </main>
  );
}

export default App;