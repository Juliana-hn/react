import Header from './Header'
import Card from './Card'
import {pizzas} from "./pizzas" 

const Home = () => {
  return (    
    <>
    <Header />
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
   
    {/*HITO 1 REQUERIMIENTOS DEL CARD
    
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
  </>
  )
}

export default Home
