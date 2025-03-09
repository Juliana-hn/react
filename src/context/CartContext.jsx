//que este jsx tenga: Aumentar, disminuir, eliminar y que aparezca el total 
import { createContext , useState,} from "react";
export const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    
    const aumentar = ({ id, img, name, price }) => {
        const index = cart.findIndex((p) => p.id === id);  //para saber si el producto ya está dentro del cart
        const producto = { id, img, name, price, count: 1 }; //lógica para añadir producto a cart 

        if (index >= 0) {
            const nuevoCarrito = [...cart];
            nuevoCarrito[index].count++;
            setCart(nuevoCarrito);
          } else {
            setCart([...cart, producto]);
          }
        };

        const increment = (id) => {
            setCart(cart.map((item) =>
              item.id === id ? { ...item, count: item.count + 1 } : item
            ));
          };
    
          const decrement = (id) => {
            setCart(cart.map((item) =>
              item.id === id
                ? { ...item, count: item.count - 1 }
                : item
            ).filter((item) => item.count > 0)); // Si llega a 0, se elimina del carrito
          };
        
    
      const totalPrice = cart.reduce(
        (total, producto) => total + producto.price * producto.count,
        0
      );
    
      return (
        <CartContext.Provider value={{ cart, aumentar, increment, decrement, totalPrice }}>
          {children}
        </CartContext.Provider>
      );
    };


export default CartProvider