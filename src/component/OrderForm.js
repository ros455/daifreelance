import React, { useState } from "react";

function OrderForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const order = {
      source_id: 1,
      buyer: {
        full_name: name,
        phone: phone,
      },
      products: [
        {
          price: price,
          quantity: 1,
          name: "Product"
        },
      ],
    };

    const response = await fetch("https://testkushnir.keycrm.app/api/v1/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer Mzk1YTJjZmUyNTA4YTE3MzNmYzFkMjQyYjgzYTFhMGZhYTQ3MWRhYw",
      },
      body: JSON.stringify(order),
    });

    const data = await response.json();
    console.log(data);
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