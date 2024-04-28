
import { BsCalendarDate } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
const Exhibition = () => {
    return (
        <section className="grid grid-cols-1    md:grid-cols-2 ">
            <div className="flex justify-center">
                <div className="card w-64 md:w-72 lg:w-96    mb-8 md:mb-14 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://images.hindustantimes.com/img/2021/03/06/1600x900/pjimage_-_2021-03-06T192427.069_1615038899966_1615038907778.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Exhibition 1</h2>
                        <p>Step into a world where colors dance and emotions speak louder than words. Join us at the art exhibition where creativity knows no bounds.</p>
                        <div className="card-actions justify-center">
                            <h2 className="flex items-center gap-2"><BsCalendarDate />19th,Feb</h2>
                            <h3 className="flex items-center gap-2"><IoLocationSharp />Sector A</h3>
                        </div>
                        <button className="btn btn-success text-white">GetTicket</button>

                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="card w-64 md:w-72 lg:w-96  mb-8 md:mb-14 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://www.ashmolean.org/sites/default/files/styles/mt_image_6_4/public/ashmolean/images/media/ahmoleannow1_hannahpye-4214_websize.jpg?itok=PPlIwVMb" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Exhibition 2</h2>
                        <p>Discover the soul-stirring narratives woven by strokes of genius. Immerse yourself in the realm of imagination at our captivating art exhibition.</p>
                        <div className="card-actions justify-center">
                            <h2 className="flex items-center gap-2"><BsCalendarDate />19th,Feb</h2>
                            <h3 className="flex items-center gap-2"><IoLocationSharp />Sector A</h3>
                        </div>
                        <button className="btn btn-success text-white">GetTicket</button>

                    </div>
                </div>
            </div>



            <div className="flex justify-center">
                <div className="card w-64 md:w-72 lg:w-96   mb-8 md:mb-14 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://images.hindustantimes.com/img/2021/03/06/1600x900/pjimage_-_2021-03-06T192427.069_1615038899966_1615038907778.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Exhibition 3</h2>
                        <p>Embark on a visual odyssey through the tapestry of human expression. Explore the depths of creativity at our mesmerizing art exhibition.</p>
                        <div className="card-actions justify-center">
                            <h2 className="flex items-center gap-2"><BsCalendarDate />19th,Feb</h2>
                            <h3 className="flex items-center gap-2"><IoLocationSharp />Sector A</h3>
                        </div>
                        <button className="btn btn-success text-white">GetTicket</button>

                    </div>
                </div>
            </div>


            <div className="flex justify-center">
                <div className="card w-64 md:w-72 lg:w-96   mb-8 md:mb-14 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfEtDtTerkxS7MiT7mrPgrP_OOEr6Vyu27eYd4rB_WIsWG1wBRGEVFCQPA0vH9V15mNV0&usqp=CAU" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Exhibition 4</h2>
                        <p>Witness the convergence of passion and skill, where every brushstroke tells a story. Experience the magic of art come alive at our enchanting exhibition.</p>
                        <div className="card-actions justify-center">
                            <h2 className="flex items-center gap-2"><BsCalendarDate />19th,Feb</h2>
                            <h3 className="flex items-center gap-2"><IoLocationSharp />Sector A</h3>
                        </div>
                        <button className="btn btn-success text-white">GetTicket</button>
                    </div>
                </div>
            </div>



        </section>
    );
};

export default Exhibition;