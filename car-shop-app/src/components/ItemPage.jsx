import { useParams } from "react-router-dom"
import {cars} from '../data/cars';
export default function ItemPage() {
    let { id } = useParams();

    const item = cars.filter(car => car.id == id)[0]

    return (
        <div className="item-page">
            <h1>{item.name}</h1>
            <img scr={item.img} alt={item.name} />
            <p>${item.price}</p>
        </div>
    )
}