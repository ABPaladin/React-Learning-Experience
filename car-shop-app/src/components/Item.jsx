export default function Item ({car}) {
    return (
        <div className="item">
            <img src={car.img} alt={car.name} />
            <h3>{car.name}</h3>
            <p>${car.price}</p>
        </div>
    )
}