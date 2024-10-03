import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { db } from '../FirebaseFloder/Firebase'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'

const SingleBlog = () => {
    const [state,setState] = useState({
        title : "",
        des : "",
        img : ""
    })
    const navigate = useNavigate()
    // const [single,setSingle] = useState({})
    const {id} = useParams()
    useEffect(()=>{
        async function getData(){
            let a = doc(db,"products",id)
            let d  = await getDoc(a)
            console.log(d)
            if(d.exists()){
               setState(d.data())
            }
        }
        getData()
     },[])
     const handleChange = (e)=>{
        setState({...state,[e.target.name] : e.target.value})
     }
     const handleSubmit = async (E) => {
        E.preventDefault();
    
        // Trigger SweetAlert for confirmation before updating
        Swal.fire({
            title: 'Are you sure?',
            text: 'You are about to update this item!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, update it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                let data = doc(db, "products", id);
                await updateDoc(data, state);
    
                // Show toast notification after successful update
                toast.success("Item Updated Successfully", { autoClose: 2000 });
    
                // Show SweetAlert success message
                Swal.fire(
                    'Updated!',
                    'Your item has been updated successfully.',
                    'success'
                ).then(() => {
                    // Navigate to blogs page after a short delay
                    setTimeout(() => {
                        navigate("/blogs");
                    }, 900);
                });
            }
        });
    };
    return (
    <div>
     <form className="custom-form" onSubmit={handleSubmit}>
  <input className="custom-input" value={state.title} type="text" name='title' placeholder='Title' onChange={handleChange} />
  <input className="custom-input" type="text" name='description' value={state.des} placeholder='Description' onChange={handleChange} />
  <input className="custom-input" type="text" name='img' value={state.img} placeholder='ImageUrl' onChange={handleChange} />
  <input className="custom-submit" type="submit" value="Submit" />
</form>
    </div>
  )
}

export default SingleBlog