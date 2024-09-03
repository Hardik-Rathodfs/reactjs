import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Edit() {
    const { id } = useParams();
    const [data, setData] = useState({
        product: '',
        imageURL: '',
        price: ''
    });
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://mock-server-app-ss14.onrender.com/mendata/${id}`)
            .then((res) => res.json())
            .then((res) => {
                setData(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://mock-server-app-ss14.onrender.com/mendata/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                navigate('/product');
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            {data ? (
                <form onSubmit={handleSubmit}>
                    <input
                        value={data.product}
                        type="text"
                        name="product"
                        onChange={handleChange}
                    />
                    <input
                        value={data.imageURL}
                        type="text"
                        name="imageURL"
                        onChange={handleChange}
                    />
                    <input
                        value={data.price}
                        type="text"
                        name="price"
                        onChange={handleChange}
                    />
                    <input type="submit" value="Update" />
                </form>
            ) : (
                <>Loading.......</>
            )}
        </div>
    );
}

export default Edit;
