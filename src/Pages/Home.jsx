import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import CraftItem from "./CraftItem";
import { useLoaderData } from "react-router-dom";
import Contributor from "./Contributor";
import Exhibition from "./Exhibition";

const Home = () => {
    const artData = useLoaderData();
    const [currentSlider, setCurrentSlider] = useState(0);
    const sliders = [{ img: "https://static.wixstatic.com/media/a72a50_582884ffdef847bca2789a7e476e205c~mv2.jpg/v1/fill/w_750,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/pic%204.jpg", title: "Escape 1", des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.", }, { img: "https://static.wixstatic.com/media/a72a50_d7e155c5a8f8495d86405921190115ac~mv2.jpg/v1/fill/w_740,h_744,al_c,q_85,enc_auto/pic%206.jpg", title: "Escape 2", des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.", }, { img: "https://static.wixstatic.com/media/a72a50_0871f61360c44ef298333d6174f0775f~mv2.jpg/v1/fill/w_750,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/pic%205.jpg", title: "Escape 3", des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.", }, { img: "https://static.wixstatic.com/media/a72a50_ccbf9a5fd5ea42f2860182d8645eae70~mv2.jpg/v1/fill/w_750,h_595,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/pic%201.jpg", title: "Escape 4", des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.", }];
    // if you don't want to change the slider automatically then you can just remove the useEffect
    useEffect(() => {
        const intervalId = setInterval(() => setCurrentSlider(currentSlider === sliders.length - 1 ? 0 : currentSlider + 1), 5000);
        return () => clearInterval(intervalId);
    }, [currentSlider]);

    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div className="w-full h-60 sm:h-96 md:h-[400px] mt-5  flex flex-col items-center justify-center gap-5 lg:gap-10 bg-cover bg-center before:absolute before:bg-black/50 before:inset-0 transform duration-1000 ease-linear"
                style={{ backgroundImage: `url(${sliders[currentSlider].img})` }}>
                {/* text container here */}
                <div className="drop-shadow-lg text-white text-center px-5">
                    <h1 className="text-xl lg:text-3xl font-semibold mb-3">{sliders[currentSlider].title}</h1>
                    <p className="text-sm md:text-base lg:text-lg">{sliders[currentSlider].des}</p>
                </div>
            </div>
            {/* slider container */}
            <div className="flex justify-center  items-center gap-3 p-2">
                {/* sliders */}
                {sliders.map((slide, inx) => (
                    <img onClick={() => setCurrentSlider(inx)} key={inx}
                        src={slide.img} className={`w-10 md:w-20 h-6 sm:h-8 md:h-12 bg-black/20 ${currentSlider === inx ? 'border-2 border-black p-px' : ''} rounded-md md:rounded-lg box-content cursor-pointer`}
                        alt={slide.title} />
                ))}
            </div>


            {/* Craft item section */}
            <section className="mt-10 ">
                <h2 className="text-center text-4xl font-bold">Craft Section</h2>
                <div className="md:grid grid-cols-2">
                    {
                        artData.map(artdata => <CraftItem key={artData.id} artdata={artdata}></CraftItem>)
                    }
                </div>


            </section>



            {/* contributor page */}
            <section className="mt-10">
                <h4 className="text-center mb-8 text-2xl font-bold">Our Top Contributor</h4>
                <Contributor></Contributor>
            </section>



            {/* exhibition page */}

            <section className="mt-10">
                <h4 className="text-center mb-8 text-2xl font-bold">Our Exhibition</h4>
                <Exhibition></Exhibition>

            </section>
        </>
    )
};


export default Home;
