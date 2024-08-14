import { Link } from 'react-router-dom'
import { useAuthContext } from '../../contexts/AuthContext';

export default function Header() {
    const { isAuthenticate } = useAuthContext();
    return (
        <header>
            <div className='header-logo'>
                <Link className="home" to="/">
                    <h1>TopRadio</h1>
                    <h3>Marketplace</h3>
                </Link>
            </div>
            <nav>
                <Link to="/products">All products</Link>
                <Link to="/posts">Blog</Link>
                {isAuthenticate
                    ? (
                        <div id="user">
                            <Link to="/products/create">Create product</Link>
                            <Link to="/posts/create">Create post</Link>
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