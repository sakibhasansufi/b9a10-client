import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";


const ViewDetail = () => {
    const houseData = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const house = houseData.find(job => job.id === idInt);
    return (

        <section className="w-full py-6 md:py-8 flex justify-center bg-white flex-col lg:py-12 bg-gradient-to-b from-#52C2FF to-white">
            <Helmet>
                <title>Details</title>
            </Helmet>
            <h1 className="text-3xl text-center font-bold tracking-tighter sm:text-2xl md:text-4xl lg:text-6xl mb-8">
                {house.title}
            </h1>
            <div>
                <div className="container px-4 md:px-6">

                    <div className="flex flex-col items-center space-y-4 text-center text-black">
                    <h2 className="text-center text-xl font-semibold mt-8">{house.des1}</h2>
                        {/* Text content */}
                        <div className="space-y-2">


                            <div className="flex flex-col md:flex-row  gap-10 justify-center">
                                <img src={house.image1} className="h-[300px]" alt="" />

                            </div>
                            <p className="text-left">
                                {house.big_Description}
                            </p>
                        </div>

                    </div>
                </div>
                {/* Feature Cards */}
                <div className="container px-4 md:px-6 mt-6 md:mt-16   flex flex-wrap justify-center items-center gap-10">
                    <div className="flex flex-row gap-3 items-center text-center text-black">

                        <h3 className="text-lg font-semibold">Author:</h3>
                        <p className="text-sm">{house.author1}</p>
                    </div>
                    <div className="flex flex-row gap-2 items-center text-center text-black">

                        <h3 className="text-lg font-semibold">Published Year:$</h3>
                        <p className="text-sm">{house.price1}</p>
                    </div>
                    <div className="flex flex-row gap-3 items-center text-center text-black">

                        <h3 className="text-lg font-semibold">Rating</h3>
                        <p className="text-sm">{house.process1}</p>
                    </div>
                </div>
            </div>



            <div>
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center space-y-4 text-center text-black">
                    <h2 className="text-center text-xl font-semibold mt-8">{house.des2}</h2>
                        {/* Text content */}
                        <div className="space-y-2">


                            <div className="flex flex-col md:flex-row  gap-10 justify-center">
                                <img src={house.image2} className="h-[300px]" alt="" />

                            </div>
                            <p className="text-left">
                                {house.big_Description2}
                            </p>
                        </div>

                    </div>
                </div>
                {/* Feature Cards */}
                <div className="container px-4 md:px-6 mt-6 md:mt-16   flex flex-wrap justify-center items-center gap-10">
                    <div className="flex flex-row gap-3 items-center text-center text-black">

                        <h3 className="text-lg font-semibold">Author:</h3>
                        <p className="text-sm">{house.author1}</p>
                    </div>
                    <div className="flex flex-row gap-2 items-center text-center text-black">

                        <h3 className="text-lg font-semibold">Published Year:$</h3>
                        <p className="text-sm">{house.price1}</p>
                    </div>
                    <div className="flex flex-row gap-3 items-center text-center text-black">

                        <h3 className="text-lg font-semibold">Rating</h3>
                        <p className="text-sm">{house.process1}</p>
                    </div>
                </div>
            </div>




            <div>
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center space-y-4 text-center text-black">
                    <h2 className="text-center text-xl font-semibold mt-8">{house.des3}</h2>
                        {/* Text content */}
                        <div className="space-y-2">


                            <div className="flex flex-col md:flex-row  gap-10 justify-center">
                                <img src={house.image3} className="h-[300px]" alt="" />

                            </div>
                            <p className="text-left">
                                {house.big_Description3}
                            </p>
                        </div>

                    </div>
                </div>
                {/* Feature Cards */}
                <div className="container px-4 md:px-6 mt-6 md:mt-16   flex flex-wrap justify-center items-center gap-10">
                    <div className="flex flex-row gap-3 items-center text-center text-black">

                        <h3 className="text-lg font-semibold">Author:</h3>
                        <p className="text-sm">{house.author1}</p>
                    </div>
                    <div className="flex flex-row gap-2 items-center text-center text-black">

                        <h3 className="text-lg font-semibold">Published Year:$</h3>
                        <p className="text-sm">{house.price1}</p>
                    </div>
                    <div className="flex flex-row gap-3 items-center text-center text-black">

                        <h3 className="text-lg font-semibold">Rating</h3>
                        <p className="text-sm">{house.process1}</p>
                    </div>
                </div>
            </div>

        </section>

    );
};

export default ViewDetail;