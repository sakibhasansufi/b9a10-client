import { Link } from "react-router-dom";


const Error = () => {
    return (
        <section>
            <div className="flex justify-center items-center mt-56">
                <h2 className="text-7xl font-bold">404 <br />Page not found</h2>
            </div>
            <div className="flex justify-center mt-8">
                <p className="text-blue-500 text-3xl underline"> <Link to='/'>Return to home</Link> </p>
            </div>
        </section>

    );
};

export default Error;