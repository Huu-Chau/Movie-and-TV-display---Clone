import { Link, useLocation, NavLink } from "react-router-dom";

export default function Nav() {
    const location = useLocation()
    const shownNavbar = location.pathname !== '/'
    return ( 
        <nav className="flex items-center py-3 px-4 fixed w-full z-50 bg-black" style={{gap: `2rem`}}>
            <Link to="/movies" className="pl-6 w-3/12 md:w-2\/12">
                <img src="./src/assets/netflix.png" alt="logo" className="w-4/12"/>
            </Link>
            { shownNavbar &&
                <div className="w-9/12">
                    <NavLink to="/" className="w-3\/12">Home</NavLink>
                    <NavLink to="/movies" className="w-3\/12 ml-4">Movies</NavLink>
                    <NavLink to="/tv-series" className="w-3\/12 ml-4">TV Shows</NavLink>
                    <NavLink to="/search" className="w-3\/12 ml-4">Search</NavLink>
                </div>
            }
        </nav>
    );
}