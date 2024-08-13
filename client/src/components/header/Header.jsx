import { Link } from 'react-router-dom'
import { useAuthContext } from '../../contexts/AuthContext';

export default function Header() {
    const { isAuthenticate } = useAuthContext();
    return (
        <header>
            <h1><Link className="home" to="/">TopRadio</Link></h1>
            <nav>
                <Link to="/products">All products</Link>
                <Link to="/posts">Blog</Link>
                {isAuthenticate
                    ? (
                        <div id="user">
                            <Link to="/products/create">Create product</Link>
                            <Link to="/logout">Logout</Link>
                        </div>
                    )
                    : (
                        <div id="guest">
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </div>
                    )
                }
            </nav>
        </header>
    );
}