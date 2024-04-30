import { Helmet } from "react-helmet-async";
import Marquee from "react-fast-marquee";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const arts = useLoaderData();
    const { _id,image, item, subCategory, description, price, rating, customization, process, stock } = arts;
    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const item = form.item.value;
        const subCategory = form.subCategory.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const process = form.process.value;
        const stock = form.stock.value;
        const updateCraft = { image, item, subCategory, description, price, rating, customization, process, stock };
        console.log(updateCraft);

        //send data to the server
        fetch(`https://coffee-store-server-tau-nine.vercel.app/art/${_id}`,{
            method : 'PUT',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(updateCraft)
        })
        .then(res=>res.json())
        .then(data=> {
            console.log(data);
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success',
                    text: 'Art Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
            }
        })
    }


    // const handleDelete = _id => {
    //     console.log(_id);


    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!"
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             fetch(`https://coffee-store-server-tau-nine.vercel.app/art/${_id}`, {
    //                 method: "DELETE"
    //             })
    //                 .then(res => res.json())
    //                 .then(data => {
    //                     console.log(data);
    //                     if (data.deletedCount > 0) {
    //                         Swal.fire({
    //                             title: "Deleted!",
    //                             text: "Your art has been deleted.",
    //                             icon: "success"

    //                         });
    //                     }
    //                 })
    //         }
    //     })
    // }
    return (
        <div>
            <Helmet>
                <title>Update Craft</title>
            </Helmet>
            <div className="flex justify-center">
                <div className="w-56 md:w-96 border border-black p-3 font-medium text-blue-500">
                    <Marquee>
                        Update your Art and Craft Item here
                    </Marquee>
                </div>

            </div>

            <div className="space-y-6 bg-[#F4F3F0] p-14 md:p-8 lg:p-24">
                <h3 className="text-3xl font-semibold text-center">Update coffee</h3>
                <form onSubmit={handleUpdate} className="space-y-6">
                    {/* 1 */}
                    <div className="md:flex justify-around">
                        <div className="space-y-2 text-sm">
                            <label htmlFor="name" className="block text-xl font-medium">
                                Image URL
                            </label>
                            <input type="text" name="image" defaultValue={image} placeholder="Image URL" className="w-52 md:w-64 lg:w-96 px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " />
                        </div>





                        <div className="space-y-2 text-sm">
                            <label htmlFor="quantity" className="block text-xl font-medium">
                                Item Name:
                            </label>
                            <input type="text" name="item" defaultValue={item} placeholder="Item NAme" className="w-52 md:w-64 lg:w-96 px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " />
                        </div>
                    </div>




                    {/* 2 */}
                    <div className="md:flex justify-around">
                        <div className="space-y-2 text-sm">
                            <label htmlFor="supplier" className="block text-xl font-medium">
                                Sub Category Name
                            </label>
                            <select name="subCategory" defaultValue={subCategory} className="select select-bordered w-52 md:w-64 lg:w-96 px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring">
                                <option disabled selected>Sub Category</option>
                                <option>Han Solo</option>
                                <option>Greedo</option>
                            </select>
                            {/* <input type="text" name="supplier" placeholder="Supplier" className="w-96 px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " /> */}
                        </div>





                        <div className="space-y-2 text-sm">
                            <label htmlFor="taste" className="block text-xl font-medium">
                                Short Description
                            </label>
                            <input type="text" name="description" defaultValue={description} placeholder="Short Description" className="w-52 md:w-64 lg:w-96 px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " />
                        </div>
                    </div>




                    {/* 3 */}

                    <div className="md:flex justify-around">
                        <div className="space-y-2 text-sm">
                            <label htmlFor="category" className="block text-xl font-medium">
                                Price
                            </label>
                            <input type="text" name="price" defaultValue={price} placeholder="Price" className="w-52 md:w-64 lg:w-96 px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " />
                        </div>





                        <div className="space-y-2 text-sm">
                            <label htmlFor="details" className="block text-xl font-medium">
                                Rating
                            </label>
                            <input type="text" name="rating" defaultValue={rating} id="username" placeholder="rating" className="w-52 md:w-64 lg:w-96 px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " />
                        </div>
                    </div>



                    {/* 4 */}

                    <div className="md:flex justify-around">
                        <div className="space-y-2 text-sm">
                            <label htmlFor="category" className="block text-xl font-medium">
                                Customization
                            </label>
                            <input type="text" name="customization" defaultValue={customization} placeholder="Yes or No" className="w-52 md:w-64 lg:w-96 px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " />
                        </div>





                        <div className="space-y-2 text-sm">
                            <label htmlFor="details" className="block text-xl font-medium">
                                Process Time
                            </label>
                            <input type="text" name="process" defaultValue={process} id="username" placeholder="Process Time" className="w-52 md:w-64 lg:w-96 px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " />
                        </div>
                    </div>




                    {/* 5 */}

                    <div className="md:flex justify-around">
                        <div className="space-y-2 text-sm">
                            <label htmlFor="category" className="block text-xl font-medium">
                                Stock Status
                            </label>
                            <select name="stock" defaultValue={stock} className="select select-bordered w-52 md:w-[600px] lg:w-[870px] px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring">
                                <option disabled selected>Stock Status</option>
                                <option>In stock</option>
                                <option>Made to order</option>
                            </select>



                            
                        </div>

                    </div>

                    {/* 5 */}

                    <div className="flex justify-around">
                        <div className="space-y-2 text-sm">
                            <input type="submit" value='Update' className="btn btn-info w-52 md:w-[600px] lg:w-[870px] px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring" />
                        </div>
                    </div>


                </form>
            </div>
        </div>
    );
};

export default Update;