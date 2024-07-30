import { Link } from "react-router-dom";

export default function NotFound(){
    return(
        <div style={{paddingTop:`12vh`}}>
            <h2>Page not found!</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic magni veniam odio quod illo quasi. Iusto veniam totam, natus ullam consectetur eligendi reiciendis delectus nobis, eum ducimus neque non dignissimos!</p>
            <p>Go to the <Link to="/movies">Home</Link></p>
        </div>
    )
}