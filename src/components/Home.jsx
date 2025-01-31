import Header from './Header'
import Card from './Card'
 
const Home = () => {
  return (    
    <>
    <Header />
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
      </div>
      
        </main>
  </>
  )
}

export default Home
