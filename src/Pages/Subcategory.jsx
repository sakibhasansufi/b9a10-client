import { Link } from "react-router-dom";


const Subcategory = () => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Shoes!</h2>
                <p>Short Description </p>
                <div className="flex gap-14">
                    <h1>Price</h1>
                    <h2>Rating</h2>
                    <h1>Process Time</h1>
                </div>
                
                <div className="card-actions">
                    <Link to='/artdata/:id'><button className="btn btn-primary">View Details</button></Link>
                    
                </div>
            </div>
        </div>
    );
};

export default Subcategory;