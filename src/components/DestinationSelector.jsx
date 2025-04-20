import React, { useState } from 'react';

const DestinationSelector = ({ tours, onDestinationChange }) => {
    // Extract unique tour names
    const uniqueDestinations = ['All Destinations', ...new Set(tours.map(tour => tour.name))];

    // State to store the selected destination
    const [selectedDestination, setSelectedDestination] = useState('All Destinations');

    // Handle dropdown change
    const handleChange = (event) => {
        const destination = event.target.value;
        setSelectedDestination(destination);
        onDestinationChange(destination); // Pass the selected destination up to App.jsx
    };

    return (
        <div>
            <label htmlFor="destination-select">Choose a destination:</label>
            <select
                id="destination-select"
                value={selectedDestination}
                onChange={handleChange}
            >
                {uniqueDestinations.map((destination, index) => (
                    <option key={index} value={destination}>
                        {destination}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default DestinationSelector;