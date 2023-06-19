import React, { useEffect, useState } from "react";
import './App.css';
function App() {
  const [column, setColumn] = useState([]);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setColumn(Object.keys(data.users[0]));
        setRecords(data.users);
      });
  }, []);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            {column.map((c, i) => (
              <th key={i}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {records.map((record, i) => (
            <tr key={i}>
              <td>{record.id}</td>
              <td>{record.firstName}</td>
              <td>{record.lastName}</td>
              <td>{record.maidenName}</td>
              <td>{record.age}</td>
              <td>{record.gender}</td>
              <td>{record.email}</td>
              <td>{record.phone}</td>
              <td>{record.username}</td>
              <td>{record.password}</td>
              <td>{record.birthDate}</td>
              <td>
                <img
                  src={record.image}
                  alt="User Avatar"
                  style={{ maxWidth: "50px" }}
                />
              </td>
              <td>{record.bloodGroup}</td>
              <td>{record.height}</td>
              <td>{record.weight}</td>
              <td>{record.eyeColor}</td>
              <td>{record.hair.color}</td>
              <td>{record.hair.type}</td>
              <td>{record.domain}</td>
              <td>{record.ip}</td>
              <td>{record.address.address}</td>
              <td>{record.address.city}City</td>
              <td>{record.address.coordinates.lat}lat</td>
              <td>{record.address.coordinates.lng}lng</td>
              <td>{record.address.postalCode}postalCode</td>
              <td>{record.address.state}state</td>
              <td>{record.macAddress}</td>
              <td>{record.university}</td>
              <td>{record.bank.cardExpire}Exp</td>
              <td>{record.bank.cardNumber}cardNumberNumber</td>
              <td>{record.bank.cardType}type</td>
              <td>{record.bank.currency}currency</td>
              <td>{record.bank.iban}iban</td>
              <td>{record.company.address.address}address</td>
              <td>{record.company.address.city}City</td>
              <td>{record.company.address.coordinates.lat}Lat</td>
              <td>{record.company.address.coordinates.lng}lng</td>
              <td>{record.company.address.postalCode}postalCode</td>
              <td>{record.company.address.state}state</td>
              <td>{record.company.department}department</td>
              <td>{record.company.name}name</td>
              <td>{record.company.title}title</td>
              <td>{record.ein}ein</td>
              <td>{record.ssn}ssn</td>
              <td>{record.userAgent}userAgent</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
