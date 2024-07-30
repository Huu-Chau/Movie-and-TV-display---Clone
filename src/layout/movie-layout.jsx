import { Outlet } from "react-router-dom";

export default function MoviesLayout() {
    return ( 
        <main className='bg-primary_black min-h-screen w-full'>
            <Outlet/>
        </main>
    );
}