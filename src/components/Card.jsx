const Card = ({name, price, ingredients, img }) => {
  return (
    <>
    <img src={img}/>
    <h3>{name}</h3>
    <h5>{price}</h5>
    <p>{ingredients}</p>
    <div className="botones">
    <button>Ver más</button>
    <button>Añadir</button>
    </div>
    </>
    )
}

export default Card
