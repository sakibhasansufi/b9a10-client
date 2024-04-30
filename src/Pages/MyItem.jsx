import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";

const MyItem = () => {
    const arts = useLoaderData();
    return (
        <div>
            <Helmet>
                <title>My Item</title>
            </Helmet>
            {
                arts.map(art => <div key={art._id} className="flex justify-center">
                    <section className="grid grid-cols-1 md:grid-cols-2">
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Shoes!</h2>
                                <div className="flex gap-36">
                                    <h1>Price</h1>
                                    <h2>Rating</h2>
                                </div>
                                <div className="flex mt-2 mb-3 gap-24">
                                    <h1>Customization</h1>
                                    <h2>Stock Status</h2>
                                </div>
                                <div className="card-actions">
                                    <Link to='/update'><button className="btn btn-primary">Update</button></Link>
                                    <button className="btn btn-error">Delete</button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>)
            }


        </div>
    );
};

export default MyItem;