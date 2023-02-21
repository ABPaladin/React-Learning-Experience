import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <Link to="/">Main</Link>
            <Link to="/catalog">Catalog</Link>
            <Link to="/about">About</Link>
        </nav>
    )
}