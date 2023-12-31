import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <div className="nav">
            <Link to="/">
                <h2>Home</h2>
            </Link>
            <Link to="/about">
                <h2>About Us</h2>
            </Link>
            <Link to="/pieces">
                <h2>Shop</h2>
            </Link>
            <Link to={`/myactivity`}>
                <h2>My Activity</h2>
            </Link>
        </div>
    )
}

export default Nav