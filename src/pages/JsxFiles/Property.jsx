import React, { useState } from 'react';
import '../../CssFiles/Property.css';

function Property() {
    const [bedrooms, setBedrooms]=useState('');
    const [bathrooms, setBathrooms]=useState('');
    const [squareFeet, setSquareFeet]=useState('');

    const handleBedroomChange=(event) => {
        setBedrooms(event.target.value);
    };

    const handleBathroomChange=(event) => {
        setBathrooms(event.target.value);
    };

    const handleSquareFeetChange=(event) => {
        setSquareFeet(event.target.value);
    };

    const handleSubmit=(event) => {
        event.preventDefault();
        console.log('Bedrooms:', bedrooms);
        console.log('Bathrooms:', bathrooms);
        console.log('Square Feet:', squareFeet);
    };

    return (
        <div className="property-container" id='pp'>
            <h1>Enter Property Details</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="bedrooms">Property Name:</label>
                    <input type="text" id="bedrooms" name="bedrooms" value={bedrooms} onChange={handleBedroomChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="bathrooms">Locality:</label>
                    <input type="text" id="bathrooms" name="bathrooms" value={bathrooms} onChange={handleBathroomChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="bathrooms">Bedrooms:</label>
                    <input type="number" id="bedrooms" name="bedrooms" value={bathrooms} onChange={handleBathroomChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="bathrooms">Bathrooms:</label>
                    <input type="number" id="bathrooms" name="bathrooms" value={bathrooms} onChange={handleBathroomChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="bathrooms">Price-Range:</label>
                    <input type="number" id="bathrooms" name="bathrooms" value={bathrooms} onChange={handleBathroomChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="square-feet">Area (Sq.ft):</label>
                    <input type="number" id="square-feet" name="square-feet" value={squareFeet} onChange={handleSquareFeetChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="square-feet">Contact:</label>
                    <input type="text" id="square-feet" name="square-feet" value={squareFeet} onChange={handleSquareFeetChange} required />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Property;
