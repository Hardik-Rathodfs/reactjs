import React, { useState } from 'react';

function Home() {
  const [state, setState] = useState({
    product: "",
    imageURL: "",
    price: ""
  });

  const handleClick = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://mock-server-app-ss14.onrender.com/mendata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(state)
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        // Reset the input fields after successful post
        setState({
          product: "",
          imageURL: "",
          price: ""
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Admin</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="product"
          placeholder="Title"
          value={state.product}
          onChange={handleClick}
        />
        <input
          type="text"
          name="imageURL"
          placeholder="imgURL"
          value={state.imageURL}
          onChange={handleClick}
        />
        <input
          type="text"
          name="price"
          placeholder="price"
          value={state.price}
          onChange={handleClick}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Home;
