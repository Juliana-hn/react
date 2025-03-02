import React, { useEffect, useState } from 'react'

const Pizza = () => {
    const [pizza, setPizza] = useState(null)
    const [loading, setLoading] = useState(true);
    const getPizza = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/pizzas/p001');
            if (!response.ok) {
                throw new Error(`HTTP ERROR! Status: ${response.status}`);
            }
            const data = await response.json();
            setPizza(data); 
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false); 
        }
    };

    useEffect(() =>{
        getPizza();
    }, [])
    if (loading) {
        return <p className="text-center mt-4">Cargando pizza...</p>;
    }

    if (!pizza) {
        return <p className="text-center mt-4">No se pudo cargar la pizza.</p>;
    }


    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-12 col-md-6 col-lg-4 mb-4">
                    <div className="card h-100 border-0">
                        <img
                            src={pizza.img}
                            className="card-img-top img-fluid rounded-top"
                            alt={pizza.name}
                        />
                        <div className="card-body">
                            <h5 className="card-title font-weight-bold">{pizza.name}</h5>
                            <p className="card-text">Descripción: {pizza.desc}</p>
                            <p className="card-text">
                                Precio: <strong>${pizza.price}</strong>
                            </p>
                            <ul className="list-unstyled mb-0 mt-3 text-muted">
                                {pizza.ingredients?.map((ingredient, index) => (
                                    <li key={index} className="card-text">{ingredient}</li>
                                ))}
                            </ul>
                            <button className="btn btn-dark btn-md mt-3 w-100">Añadir</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Pizza