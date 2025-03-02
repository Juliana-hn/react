import { useState } from "react"
import { pizzaCart } from "../components/pizzas";

const Cart = () => {
    const [cart, setCart] = useState(pizzaCart.map(item => ({ ...item, count: 0 })));

const incrementarCantidad = (id) => {
    setCart(cart.map(item => 
        item.id === id ? { ...item, count: item.count + 1 } : item
    ));
};

const disminuirCantidad = (id) => {
    setCart(cart.map(item => 
        item.id === id && item.count > 0 ? { ...item, count: item.count - 1 } : item
    ));
};

const Total = () => {
    return cart.reduce((total, item) => total + item.price * item.count, 0);
}

return(
    <div className="cartcontainer mt-5">
        <h2 className="text-center mb-4"> Compras</h2>
        {cart.map((item) => (

        <div className="cartCard mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img 
                        src={item.img}
                        className="img-fluid rounded-start" 
                        alt={item.name}
                        style={{ height:"200px", objectFit: "cover" }} 
                    />
                </div>
                <div className="col-md-8">
                    <div className="cartCard-body">
                        <h5 className="cartCard-title"> {item.name}</h5>
                        <p className="cartCard-text"> Precio: {item.price}</p>
                        <div className="cartButtons">
                            <button 
                                className="btn btn-outline-danger"
                                onClick={() => disminuirCantidad(item.id)}> 
                                -
                            </button>
                            <span>  {item.count}  </span>
                            <button 
                                className="btn btn-outline-success"
                                onClick={() => incrementarCantidad(item.id)}>
                                +
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
))}
 <div className="text-end mt-4">
 <h3>Total: { Total ()} </h3>
 <button className="btn btn-outline-success mb-5">Pagar</button>
 </div>
 </div>
)
}

export default Cart;

