import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Admin() {
    const [state, setState] = useState({
        id: uuidv4(),
        title: "",
        price: "",
        des: "",
        image: ""
    });

    const [arr, setArr] = useState(JSON.parse(localStorage.getItem("data")) || []);
    const [edit, setEdit] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (edit === null) {
            setArr([...arr, state]);
        } else {
            const updatedArr = arr.map((el) => {
                if (el.id === edit) {
                    return { ...el, ...state };
                } else {
                    return el;
                }
            });
            setArr(updatedArr);
        }

        setEdit(null);
        setState({
            id: uuidv4(),
            title: "",
            price: "",
            des: "",
            image: ""
        });
    };

    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(arr));
    }, [arr]);

    const handleDelete = (id) => {
        const updatedArr = arr.filter((el) => el.id !== id);
        setArr(updatedArr);
    };

    const handleEdit = (id) => {
        setEdit(id);
        const selectedItem = arr.find(el => el.id === id);
        if (selectedItem) {
            setState(selectedItem);
        }
    };

    const { title, price, des, image } = state;

    return (
        <div className='body'>
            <div className="container">
                <header>Admin Panel</header>
                <form onSubmit={handleSubmit}>
                    <div className="input-field">
                        <label>Enter Product Title</label>
                        <input type="text" name='title' value={title} onChange={handleChange} required />
                    </div>
                    <div className="input-field">
                        <label>Enter Product Price</label>
                        <input type="text" name='price' value={price} onChange={handleChange} required />
                    </div>
                    <div className="input-field">
                        <label>Enter Image URL</label>
                        <input type="text" name='image' value={image} onChange={handleChange} required />
                    </div>
                    <div className="input-field">
                        <label>Enter Product Description</label>
                        <input type="text" name='des' value={des} onChange={handleChange} required />
                    </div>
                    <div className="button">
                        <input type="submit" value={edit !== null ? "Update" : "Submit"} />
                    </div>
                </form>
            </div>

            {
                arr.length > 0 ? (
                    <table className="product-table">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                arr.map((el) => {
                                    return (
                                        <tr key={el.id}>
                                            <td><img src={el.image} alt={el.title} /></td>
                                            <td>{el.title}</td>
                                            <td>{el.des}</td>
                                            <td>₹{el.price}</td>
                                            <td>
                                                <button className="edit-btn" onClick={() => handleEdit(el.id)}>Edit</button>
                                                <button className="delete-btn" onClick={() => handleDelete(el.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                ) : (
                    <p className="no-products">No products available.</p>
                )
            }
        </div>
    );
}

export default Admin;
