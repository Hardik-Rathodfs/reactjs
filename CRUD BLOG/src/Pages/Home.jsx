import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addData } from '../Redux/Product/action';
import Swal from 'sweetalert2';

const Home = () => {
    const [title,setTitle] = useState("");
    const [img,setImage] = useState("")
    const[des,setdescription]=useState("")
    const dispatch = useDispatch()
    const state = useSelector((s)=>s.proReducer)
    const navigate=useNavigate()
    

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!title || !des || !img) {
            Swal.fire({
                title: 'Error!',
                text: 'Please fill in all fields before submitting.',
                icon: 'error',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Okay'
            });
            return; // Stop execution if validation fails
        }
    
        let obj = {
            title,
            des,
            img,
        };
    
        Swal.fire({
            title: 'Submit Blog?',
            text: 'Are you sure you want to submit this blog?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, submit it!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(addData)(obj);
    
                Swal.fire(
                    'Submitted!',
                    'Your blog has been submitted successfully.',
                    'success'
                ).then(() => {
                    navigate('/blogs');
                });
            }
        });
    };
    
  return (
    <div>
     <form className="product-form" onSubmit={handleSubmit}>
  <input
    type="text"
    placeholder="Title"
    className="input-field"
    onChange={(e) => setTitle(e.target.value)}
  />
 
  <input
    type="text"
    placeholder="Image URL"
    className="input-field"
    onChange={(e) => setImage(e.target.value)}
  />
  <textarea
    placeholder="Description"
    className="textarea-field"
    onChange={(e) =>setdescription(e.target.value)}
  />

  <input type="submit" className="submit-btn" value="Submit" />
</form>
    </div>
  ) 
}


export default Home