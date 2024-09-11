import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Fetchdata() {
   const [state, setState] = useState([]);

   useEffect(() => {
      axios.get(`https://mock-server-app-2-4ouf.onrender.com/products`)
         .then((res) => {
            console.log(res.data);
            setState(res.data);
         })
         .catch((error) => {
            console.error("There was an error fetching data!", error);
         });
   }, []);

   return (
      <>
         {
            state.map((el) => (
               <h1>{el.strMeal}</h1>
            ))
         }
      </>
   );
}

export default Fetchdata;
