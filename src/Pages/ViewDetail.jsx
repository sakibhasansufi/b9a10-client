import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";


const ViewDetail = () => {
    const houseData = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const house = houseData.find(job => job.id === idInt);
    return (
        <section>
            <Helmet>
                <title>Details</title>
            </Helmet>
            <div>
                <h2>{house.id}</h2>
            </div>
        </section>
    );
};

export default ViewDetail;