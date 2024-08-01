import { Link } from "react-router-dom";

export function SearchItem({id, img, name, searchType}) {
    return(
        <Link to={`${searchType == 0 ? `/movies/detailed-movie`: `/tv-series/detailed-series`}/${id}`} className="item">
            <img src={`https://image.tmdb.org/t/p/w300/${img}`} alt="" />
            <p>{name}</p>
        </Link>
    )
}