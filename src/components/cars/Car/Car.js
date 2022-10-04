function Car({car}) {

    return (
        <div>
            <h3>Id - {car.id}</h3>
            <p>Model - {car.model} <br/>
                Price - {car.price} <br/>
                Year - {car.year}</p>
        </div>
    );
}

export {Car};
