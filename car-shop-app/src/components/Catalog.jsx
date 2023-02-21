import {cars} from '../data/cars';
import Item from './Item';
import { Link } from 'react-router-dom';

export default function Catalog() {
    return(
        <div className="catalog">
            <h1>Cars</h1>
            {
                // console.log(cars)
                cars.map(car =>
                <Link to={"/catalog/" + car.id}> 
                    <Item key={car.id} car={car} />
                </Link>)
            }
        </div>
    );
}