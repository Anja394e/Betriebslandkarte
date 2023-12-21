// src/components/PersonList.js

import React, { useState, useEffect } from 'react';

import axios from 'axios';

import ProductTypeFilter from './ProductTypeFilter';
import ProductListByType from './ProductListByType';
import './style.css';
import AddPersonButton from "./AddPersonButton";




const PersonList = () => {

    const [persons, setPersons] = useState([]);
    const [selectedProductType, setSelectedProductType] = useState(null);
    const [filterProductType, setFilterProductType] = useState('');

    const handleAddPerson = (newPerson) => {
        setPersons([... persons, newPerson]);
    };



    useEffect(() => {

        const fetchPersons = async () => {

            try {

                const response = await axios.get('http://localhost:8080/api/v1/persons');

                setPersons(response.data);

            } catch (error) {

                console.error('Error fetching persons:', error);

            }

        };



        fetchPersons();

    }, []);



    const handleProductTypeClick = (productType) => {

        setSelectedProductType(productType);

        setFilterProductType(productType); // Set filter to selected product type

    };



    const handleFilterChange = (event) => {

        setFilterProductType(event.target.value);

        setSelectedProductType(null);

    };



    return (

        <div>

            <h2>Person List</h2>



            <label>

                Filter by Product Type:{' '}

                <input

                    type="text"

                    value={filterProductType}

                    onChange={handleFilterChange}

                />

            </label>



            <ul>

                {persons.map((person) => (

                    <li key={person.id}>

                        <strong>Name:</strong> {person.firstName} {person.lastName} <br />

                        <strong>Email:</strong> {person.email} <br />

                        <strong>Creation Date:</strong> {person.creationDate} <br />

                        <strong>Products:</strong>

                        <ul>

                            {person.products

                                .filter((product) =>

                                    product.productType.toLowerCase().includes(filterProductType.toLowerCase())

                                )

                                .map((product) => (

                                    <li key={product.id}>

                                        <strong>Product Name:</strong> {product.productName} <br />

                                        <strong>Product Type:</strong>{' '}

                                        <ProductTypeFilter

                                            productType={product.productType}

                                            onClick={handleProductTypeClick}

                                        />

                                        <br />

                                    </li>

                                ))}

                        </ul>

                        <hr />

                    </li>

                ))}

            </ul>



            {selectedProductType && (

                <ProductListByType

                    products={persons

                        .flatMap((person) => person.products)

                        .filter(

                            (product) => product.productType.toLowerCase() === selectedProductType.toLowerCase()

                        )}

                    selectedProductType={selectedProductType}

                />

            )}

            <AddPersonButton onAddPerson={handleAddPerson} />

        </div>

    );

};



export default PersonList;
