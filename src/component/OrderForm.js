import React, { useState } from "react";

function OrderForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();


    const order = {
      "source_id": 10,
      "source_uuid": "115",
      "buyer_comment": "I want this sentence to be my `buyer` comment on KeyCRM",
      "manager_id": 1,
      "manager_comment": "Handle till weekend",
      "promocode": "MERRYCHRISTMAS",
      "discount_percent": 11.5,
      "discount_amount": 9.99,
      "shipping_price": 2.5,
      "wrap_price": 3.5,
      "taxes": 2.5,
      "ordered_at": "2021-12-21 14:44:00",
      "buyer": {
        "full_name": "Test Kushnir",
        "email": "john.doe@mail.app",
        "phone": "+1 555-234-1234"
      }
    };
    
    const dataString = JSON.stringify(order);


    const token = 'ODQ0MDA5YjE3ZmJhMGYwNzQxMTFlN2FmYmRlZjE0MzEwNDljYzM5OQ'

  //   const response = await fetch("https://openapi.keycrm.app/v1/order", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Accept": "application/json",
  //       "Cache-Control": "no-cache",
  //       "Pragma": "no-cache",
  //       "Authorization": `Bearer ${token}`
  //     },
  //     body: JSON.stringify(order),
  //     mode: 'no-cors'
  //   })
  //   .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return response.json();
  //     })
  //     .then(data => {
  //       console.log(data);
  //     })
  //     .catch(error => {
  //       console.error('There was a problem with the fetch operation:', error);
  //     });
  // };

  fetch('https://openapi.keycrm.app/v1/order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache',
      'Authorization': 'Bearer ' + token
    },
    body: dataString,
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
};

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default OrderForm;