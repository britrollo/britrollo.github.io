import { Outlet } from "react-router-dom";
import Nav from '../components/Nav';

export default function Root() {
    return (
        <>
            <h1>Welcome</h1>
            <Nav />
            <Outlet />
        </>
    );
}  