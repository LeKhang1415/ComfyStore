import { Link, useRouteError } from "react-router-dom";

function Error() {
    const error = useRouteError();
    if (error.status === 404) {
        return (
            <main className="grid min-h-screen px-8 place-items-center">
                <div className="text-center ">
                    <p className="text-9xl font-semibold text-primary">404</p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                        Page not found
                    </h1>
                    <p className="mt-6 text-lg leading-7 ">
                        Sorry, we couldn’t find the page you’re looking for.
                    </p>
                    <div className="mt-10 ">
                        <Link to="/" className="btn btn-secondary">
                            Go back home
                        </Link>
                    </div>
                </div>
            </main>
        );
    }
    return (
        <main className="grid min-h-screen px-8 place-items-center">
            <h4 className="text-center font-bold text-4xl">
                There was an error
            </h4>
        </main>
    );
}

export default Error;
