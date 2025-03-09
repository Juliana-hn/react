import Header from "../components/Header";
import Card from '../components/Card';
// import {pizzas} from "./pizzas" 
import React, { useEffect, useState, useContext } from 'react'
import { CartContext } from "../context/CartContext";

const Home = () => {

  const [pizzas, setPizzas] = useState([])
  const { aumentar } = useContext(CartContext);
    const getPizzas = async () =>{
        try{
            //petición al API
            const response = await fetch ('http://localhost:5000/api/pizzas')
            if (!response.ok){
                throw new Error (`HTTP ERROR! Status: ${response.status} `)
            }
            const data = await response.json();
            setPizzas(data)
        }
        catch (error) {};
    }

    useEffect(() =>{
        getPizzas();
    }, [])

    const handleAddToCart = (pizza) => {
      aumentar({ 
        id: pizza.id, 
        img: pizza.img, 
        name: pizza.name, 
        price: pizza.price 
      });
    };
  
  return (    
    <>
    <Header />
    <div className='container mt-4'>
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3'>
            {pizzas.map((pizza)=> (
                <div className='col-12 col-md-4 mb-4' key={pizza.id}>
                    <div className='card h-100 border-0'>
                        <img 
                        src={pizza.img} 
                        className="card-img-top img-fluid rounded-top"
                        alt={pizza.name} />

                        <div className='card-body'>
                            <h5 className="card-title font-weight-bold">{pizza.name}</h5>
                            <p className='card-text'>Descripción: {pizza.desc}</p>
                            <p className='card-text'>
                            Precio: <strong>${pizza.price}</strong>
                            </p>
                            <ul className="list-unstyled mb-0 mt-3 text-muted">
                                {pizza.ingredients.map((ingredient, index) => (
                                    <li key={index} className="card-text">{ingredient}</li>
                                ))}
                            </ul>
                            <button className="btn btn-dark btn-md mt-3 w-100"
                              onClick={() => handleAddToCart(pizza)} // Llamamos a la función handleAddToCart
                            >Añadir</button>
                        </div>  
                    </div>
                </div>
        ))}
        </div>   
    </div> 
    </> 
    )}
    export default Home

    {/* HITO 2 USANDO import {pizzas} from "./pizzas"
      
      <main className="CardsContainer">
        <div className="row"> 
            {pizzas.map ((pizzas)=> (
              <Card 
                className="card"
                key = {pizzas.id}
                img = {pizzas.img}
                name = {pizzas.name}
                desc = {pizzas.desc}
                ingredients = {pizzas.ingredients}
                price = {pizzas.price}
                >
            </Card>
            ))}
        </div>
      </main>
   
    HITO 1 REQUERIMIENTOS DEL CARD
    
    <main className="container">
      <div className="cards-container">
      
        <Card 
        className="card"
        name="Napolitana"
        price={'Precio: $5950'}
        ingredients={["Ingredientes: mozzarella,", "tomates,", "jamón,", "orégano"]} 
        img={'https://media.istockphoto.com/id/513533335/es/foto/pizza-napolitana-margarita-en-primer-plano-vertical.jpg?s=612x612&w=0&k=20&c=phL2se0KzvSO7OfoyVU9-tElZJLwCpbcdwsdivNG4_M='}
        />
      </div>
      <div className="cards-container">
        <Card 
        className="card"
        name="Española"
        price={'Precio: $6950'}
        ingredients={["Ingredientes: mozzarella,", "gorgonzola,", "parmesano"]}
        img={'https://img.freepik.com/foto-gratis/vista-superior-delicioso-arreglo-pizza_23-2150134255.jpg'}
        />
        </div>
      <div className="cards-container">
        <Card 
         className="card"
        name="Pepperoni"
        price={'Precio: $6950'}
        ingredients={["Ingredientes: mozzarella,", "pepperoni,", "orégano"]}
        img={'https://i0.wp.com/picjumbo.com/wp-content/uploads/pizza-salami-vertical.jpg?w=600&quality=80'}
        />
      </div>*/}

