import { Link } from 'react-router-dom'
import './Navbar.css'

export const Navbar = ()=> {
    return(
        <nav>
            <Link className='link' to="/">محصولات</Link>
            <Link className='link' to="/basket">سبد خرید</Link>
        </nav>
    )
}