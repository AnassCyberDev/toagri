import React, { useState, useRef } from 'react';
import { addProduct } from '../../../../actions/productActions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './AddProduct.css';

export const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState();
    const [reduction, setReduction] = useState();
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [dropLabel, setDropLabel] = useState("Déposer vos fichiers ou cliquez ici");

    const [images, setImages] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const dropRef = useRef(null);

    const onSubmit = async (e) => {
        e.preventDefault();
        const formdata = new FormData();
        formdata.append('name', name);
        formdata.append('description', description);
        formdata.append('price', price);
        formdata.append('category_id', type);
        for (let i = 0; i < images.length; i++) {
            formdata.append("images", images[i]);
        }

        dispatch(addProduct(formdata, localStorage.getItem('token'), navigate));
    };

    const handleFileChange = (event) => {
        const selectedFiles = Array.from(event.target.files);
        setImages(prev => [...prev, ...selectedFiles]);
        setDropLabel(`${selectedFiles.length} fichier(s) sélectionné(s)`);
    };
    
    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropRef.current.classList.remove('drag-over');
        const droppedFiles = Array.from(e.dataTransfer.files);
        setImages(prev => [...prev, ...droppedFiles]);
        setDropLabel(`${droppedFiles.length} fichier(s) déposé(s)`);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropRef.current.classList.add('drag-over');
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropRef.current.classList.remove('drag-over');
    };

    return (
        <div id='addProduct'>
            <div className="title">
                <div>
                    <span>Add Product</span>
                </div>
            </div>

            <form onSubmit={onSubmit} className="addItem">
                <div className="row">
                    <div className="col-md-6">
                        <input type="text" className="form-control add_P" id="product_name" placeholder="product name" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="col-md-6">
                        <input type="text" className="form-control add_P" id="product_price" placeholder="product price" value={price} onChange={(e) => setPrice(e.target.value)} required />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <input type="text" className="form-control add_P" id="product_reduction" placeholder="product reduction" value={reduction} onChange={(e) => setReduction(e.target.value)} required />
                    </div>
                    <div className="col-md-6">
                        <select className='form-control add_P' value={type} onChange={(e) => setType(e.target.value)}>
                            <option value={1}>Toys</option>
                            <option value={2}>Clothing</option>
                        </select>
                    </div>
                </div>
                <div className="row">
    <div className="col">
        <label
            htmlFor="images"
            className="drop-container"
            id="dropcontainer"
            ref={dropRef}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
        >
            <p className="drop-title text-muted">{dropLabel}</p>
            <input
                type="file"
                id="images"
                className='add_P'
                multiple
                onChange={handleFileChange}
                accept="image/*"
                style={{ display: 'none' }}
            />
        </label>
        <div className="mt-2">
            {images.length > 0 && (
                <ul className="list-unstyled">
                    {images.map((file, index) => (
                        <li key={index}>{file.name}</li>
                    ))}
                </ul>
            )}
        </div>
    </div>
</div>


                <div className="row">
                    <div className="col">
                        <textarea
                            rows={4}
                            className="form-control add_P"
                            id="product-description"
                            placeholder="product description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <button className='button1' type="submit">Upload Product</button>
            </form>
        </div>
    );
};
