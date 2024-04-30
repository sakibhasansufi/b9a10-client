import { Helmet } from "react-helmet-async";
import Marquee from "react-fast-marquee";

const Update = () => {
    const handleAdd = e => {
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
        const craft = { image, item, subCategory, description, price, rating, customization, process, stock};
        console.log(craft);
    }
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
                <form onSubmit={handleAdd} className="space-y-6">
                    {/* 1 */}
                    <div className="md:flex justify-around">
                        <div className="space-y-2 text-sm">
                            <label htmlFor="name" className="block text-xl font-medium">
                                Image URL
                            </label>
                            <input type="text" name="image" placeholder="Image URL" className="w-52 md:w-64 lg:w-96 px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " />
                        </div>





                        <div className="space-y-2 text-sm">
                            <label htmlFor="quantity" className="block text-xl font-medium">
                                Item Name
                            </label>
                            <input type="text" name="item" placeholder="Item NAme" className="w-52 md:w-64 lg:w-96 px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " />
                        </div>
                    </div>




                    {/* 2 */}
                    <div className="md:flex justify-around">
                        <div className="space-y-2 text-sm">
                            <label htmlFor="supplier" className="block text-xl font-medium">
                                Sub Category Name
                            </label>
                            <select name="subCategory" className="select select-bordered w-52 md:w-64 lg:w-96 px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring">
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
                            <input type="text" name="description" placeholder="Short Description" className="w-52 md:w-64 lg:w-96 px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " />
                        </div>
                    </div>




                    {/* 3 */}

                    <div className="md:flex justify-around">
                        <div className="space-y-2 text-sm">
                            <label htmlFor="category" className="block text-xl font-medium">
                                Price
                            </label>
                            <input type="text" name="price" placeholder="Price" className="w-52 md:w-64 lg:w-96 px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " />
                        </div>





                        <div className="space-y-2 text-sm">
                            <label htmlFor="details" className="block text-xl font-medium">
                                Rating
                            </label>
                            <input type="text" name="rating" id="username" placeholder="rating" className="w-52 md:w-64 lg:w-96 px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " />
                        </div>
                    </div>



                    {/* 4 */}

                    <div className="md:flex justify-around">
                        <div className="space-y-2 text-sm">
                            <label htmlFor="category" className="block text-xl font-medium">
                                Customization
                            </label>
                            <input type="text" name="customization" placeholder="Yes or No" className="w-52 md:w-64 lg:w-96 px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " />
                        </div>





                        <div className="space-y-2 text-sm">
                            <label htmlFor="details" className="block text-xl font-medium">
                                Process Time
                            </label>
                            <input type="text" name="process" id="username" placeholder="Process Time" className="w-52 md:w-64 lg:w-96 px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " />
                        </div>
                    </div>




                    {/* 5 */}

                    <div className="md:flex justify-around">
                        <div className="space-y-2 text-sm">
                            <label htmlFor="category" className="block text-xl font-medium">
                                Stock Status
                            </label>
                            <select name="stock" className="select select-bordered w-52 md:w-[600px] lg:w-[870px] px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring">
                                <option disabled selected>Stock Status</option>
                                <option>In stock</option>
                                <option>Made to order</option>
                            </select>



                            {/* <input type="text" name="price" placeholder="Price" className="w-96 px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " /> */}
                        </div>

                    </div>

                    {/* 5 */}

                    <div className="flex justify-around">
                        <div className="space-y-2 text-sm">
                            <input type="submit" value='Add' className="btn btn-info w-52 md:w-[600px] lg:w-[870px] px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring" />
                        </div>
                    </div>


                </form>
            </div>
        </div>
    );
};

export default Update;