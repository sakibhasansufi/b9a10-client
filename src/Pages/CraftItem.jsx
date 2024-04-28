import { Link } from "react-router-dom";


const CraftItem = ({artdata}) => {
    const {id,title,image1,image2,image3,description} = artdata;

    return (


        <section>


            {/* 1 */}
            <div className=" mx-auto my-6 max-w-[470px] p-4 rounded-lg bg-white font-sans shadow-lg dark:bg-[#18181B]">
                <div className="flex items-center justify-between gap-10 px-4 py-4">
                    {/* Avatar image  */}
                    <div className="flex items-center gap-3">

                        <div className="flex flex-col">
                            <h2 className="text-xl font-semibold">{title}</h2>

                        </div>
                    </div>

                </div>
                {/* Post Image */}
                <div className="flex flex-col gap-1">
                    <div className="w-full">
                        <img src={image1} className="h-[150px] w-full bg-black/40" />
                    </div>
                    <div className="flex gap-1 overflow-hidden">
                        <img src={image2} alt="" className="h-[150px] w-[49.5%] bg-black/40" />

                        <img src={image3} alt="" className="h-[150px] w-[49.5%] bg-black/40" />

                    </div>
                </div>
                {/* Post content */}
                <div className="mt-3 space-y-2 px-4">

                    <h2 className="text-sm text-gray-500 dark:text-white/50">{description}</h2>
                </div>
                <div className="flex justify-center mt-4">

                    <Link to={`/artdata/${id}`}><button className="rounded-full bg-black px-4 py-2 text-sm text-white duration-300 active:scale-95">View Details</button></Link>
                </div>
            </div>



            

        </section>


    );
};

export default CraftItem;