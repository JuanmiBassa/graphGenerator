import { Link, useRouteError } from "react-router-dom"

export default function ErrorPage() {
    const error = useRouteError();
    return (
        <>
            <h1>ERROR 404</h1>
            <i>{error.statusText || error.message}</i>
            <Link to="/">Road to HomePage</Link>
        </>
    )
}