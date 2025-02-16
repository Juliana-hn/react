const Card = ({ img, name, desc, ingredients, price }) => {
  return (
    <div className="col-12 col-md-4 mb-4">
    <div className="card h-100 border-0">
      <img src={img} className="card-img-top img-fluid rounded-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title font-weight-bold">{name}</h5>
        <p className="card-text">
          Precio: <strong>${price}</strong>
        </p>
        <p className="card-text">Descripción: {desc}</p>
        <ul className="list-unstyled mb-0 mt-3 text-muted">
          {ingredients.map((item, index) => (
            <li className="card-text" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <button className="btn btn-dark btn-md">Comprar</button>
      </div>
    </div>
  );
};

export default Card;

