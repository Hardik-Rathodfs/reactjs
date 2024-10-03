import { deleteDoc, doc } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getData } from '../Redux/Product/action'
import { db } from '../FirebaseFloder/Firebase'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { toast } from 'react-toastify'

const Blogs = () => {
    const dispatch = useDispatch()
    const state = useSelector((s)=>s.proReducer)
    const navigate = useNavigate()
    console.log(state)
    useEffect(()=>{
       dispatch(getData)
    },[])

    const handleDelete = async (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                let data = doc(db, "products", id);
                await deleteDoc(data);
                
                toast.success("Data Deleted Successfully", { autoClose: 3000 });
                
                dispatch(getData);
    
                Swal.fire(
                    'Deleted!',
                    'Your product has been deleted.',
                    'success'
                );
            }
        });
    };
  return (
    <>

{
  state.product.map((el) => {
    return (
      <div className="blog-post-card" key={el.id}>
        <img src={el.img} alt={el.title} className="blog-post-image" />
        <div className="blog-post-content">
          <h2 className="blog-post-title">{el.title}</h2>
          <p className="blog-post-description">₹{el.des}</p>
        </div>
        <div className="blog-post-actions">
          <button className="edit-btn" onClick={() => navigate(`/blogs/edit/${el.id}`)}>Edit</button>
          <button className="delete-btn" onClick={() => handleDelete(el.id)}>Delete</button>
        </div>
      </div>
    );
  })
}


    </>
  )
}

export default Blogs