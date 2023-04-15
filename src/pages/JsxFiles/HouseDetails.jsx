import React from "react";
import '../../CssFiles/HouseDetails.css';

const HouseDetails = () => {
  const house = {
    id: 1,
    address: "123 Main St.",
    city: "San Francisco",
    state: "CA",
    zip: "94107",
    price: "$1,000,000",
    beds: 3,
    baths: 2,
    sqft: 2000,
    yearBuilt: 2005,
    garage: 2,
    lotSize: "0.25 acres",
    description:
      "This beautiful house has everything you need! Spacious living areas, modern finishes, and a great backyard for entertaining. Come see it for yourself!",
    photos: [
      "https://via.placeholder.com/500x300",
      "https://via.placeholder.com/500x300",
      "https://via.placeholder.com/500x300"
    ],
    owner: {
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "555-123-4567"
    }
  };

  const {
    id,
    address,
    city,
    state,
    zip,
    price,
    beds,
    baths,
    sqft,
    yearBuilt,
    garage,
    lotSize,
    description,
    photos,
    owner
  } = house;

  return (
    <div className="hd-container">
      <div className="hd-top">
        <div className="hd-photo hd-fullsize">
          <img src={photos[0]} alt={`House ${id}`} />
        </div>
        <div className="hd-header">
          <h1>{address}</h1>
          <h2>{`${city}, ${state} ${zip}`}</h2>
          <h3>{price}</h3>
        </div>
      </div>
      <div className="hd-bottom">
        <div className="hd-description">
          <h3>Description</h3>
          <p>{description}</p>
        </div>
        <div className="hd-info">
          <div className="hd-basic">
            <h3>Basic Info</h3>
            <ul>
              <li>{`${beds} beds`}</li>
              <li>{`${baths} baths`}</li>
              <li>{`${sqft} sqft`}</li>
              <li>{`Built in ${yearBuilt}`}</li>
              <li>{`${garage} car garage`}</li>
              <li>{`${lotSize} lot size`}</li>
            </ul>
          </div>
          <div className="hd-gallery">
            <h3>Gallery</h3>
            <div className="hd-gallery-images">
              {photos.map((photo, index) => (
                <div className="hd-fullsize" key={photo}>
                  <img src={photo} alt={`House ${id} photo ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
          <div className="hd-owner">
            <h3>Owner Contact Information</h3>
            <p>{owner.name}</p>
            <p>{owner.email}</p>
            <p>{owner.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseDetails;
