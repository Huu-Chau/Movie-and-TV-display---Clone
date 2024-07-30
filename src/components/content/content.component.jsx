import { NavLink, Outlet } from "react-router-dom";

const Content = () => {
    return ( 
    <div>This is content
        <NavLink to="/">Home</NavLink>
        <NavLink to="featured-movie">featured</NavLink>
        <NavLink to="trending-movies">trending</NavLink>
    </div> );
}

export default Content;