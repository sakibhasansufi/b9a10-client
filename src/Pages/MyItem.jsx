import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyItem = () => {
    const arts = useLoaderData();
    // const {image, item, subCategory, description, price, rating, customization, process, stock, email, name} = arts;
    const handleDelete = _id => {
        console.log(_id);


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/art/${_id}`,{
                    method : "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if(data.deletedCount>0){
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your art has been deleted.",
                                icon: "success"

                            });
                        }
                    })
            }
        })
    }
    return (
        <div>
            <Helmet>
                <title>My Item</title>
            </Helmet>
            {
                arts.map(art => <div key={art._id} className="flex justify-center">

                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={art.image} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Title :{art.item}</h2>
                            <div className="flex gap-36">
                                <h1>Price : ${art.price}</h1>
                                <h2>Rating :{art.rating}</h2>
                            </div>
                            <div className="flex mt-2 mb-3 gap-24">
                                <h1>Customization :{art.customization}</h1>
                                <h2>Stock Status : {art.stock}</h2>
                            </div>
                            <div className="card-actions">
                                <Link to={`/update/${art._id}`}><button className="btn btn-primary">Update</button></Link>
                                <button onClick={() => handleDelete(art._id)} className="btn btn-error">Delete</button>
                            </div>
                        </div>
                    </div>


                </div>)
            }


        </div>
    );
};

export default MyItem;