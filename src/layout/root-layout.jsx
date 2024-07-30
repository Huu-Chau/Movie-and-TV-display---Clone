import Nav from "../components/nav/nav.component"
import { Outlet } from "react-router-dom"

export default function RootLayout() {
    return(
        <div className="bg-black text-gray-100">
            <Nav/>
            <Outlet/>
        </div>
    )
}   