import React, { useState } from "react";
import '../../CssFiles/Brokers.css'

const brokersData = [
  {
    name: "John Smith",
    experience: "10 years",
    salesVolume: "$100 million",
    commissionRate: "5%",
  },
  {
    name: "Jane Doe",
    experience: "8 years",
    salesVolume: "$80 million",
    commissionRate: "4.5%",
  },
  {
    name: "Jane Doe",
    experience: "8 years",
    salesVolume: "$80 million",
    commissionRate: "4.5%",
  },
  {
    name: "Jane Doe",
    experience: "8 years",
    salesVolume: "$80 million",
    commissionRate: "4.5%",
  },
  {
    name: "Jane Doe",
    experience: "8 years",
    salesVolume: "$80 million",
    commissionRate: "4.5%",
  },
  {
    name: "Jane Doe",
    experience: "8 years",
    salesVolume: "$80 million",
    commissionRate: "4.5%",
  },
  {
    name: "Jane Doe",
    experience: "8 years",
    salesVolume: "$80 million",
    commissionRate: "4.5%",
  },
  // Add more broker data here...
];

const Brokers = () => {
  const [brokers, setBrokers] = useState(brokersData);

  return (
    <div className="brokers-container">
      <h1>Top 50 Brokers</h1>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Experience</th>
            <th>Sales Volume</th>
            <th>Commission Rate</th>
          </tr>
        </thead>
        <tbody>
          {brokers.map((broker, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <a href={`/broker`}>
              <td>{broker.name}</td>
            </a>
              <td>{broker.experience}</td>
              <td>{broker.salesVolume}</td>
              <td>{broker.commissionRate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Brokers;
