import './ContentDetails.scss';
import ApoImoApi from '../../classes/apo-imo-api';
import DetailsImage from '../../components/DetailsImage/DetailsImage';
import DetailsContainer from '../../components/DetailsContainer/DetailsContainer';
import CommentsContainer from '../../components/CommentsContainer/CommentsContainer';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

function ContentDetails() {
    const { id } = useParams();
    const apoImoApi = new ApoImoApi();
    const [contentDetails, setContentDetails] = useState([]);
    const serverURL = process.env.REACT_APP_SERVER_URL;

    useEffect(() => {
        async function getContentDetails() {
            try {
                const response = await apoImoApi.getContentDetails(id);
                setContentDetails(response.data);
            } catch (error) {
                console.log("Error fetching content details", error)
            }
        }
        getContentDetails()
    }, [id]);

    if (contentDetails.length === 0) {
        return <p>Loading content details...</p>
    }

    return (
        <main className='content__details'>
            <DetailsImage imgSrc={`${serverURL}/${contentDetails.image_URL}`}
                title={contentDetails.name} />
            <section className='content__details-continer'>
                <DetailsContainer contentDetails={contentDetails} />
                <CommentsContainer contentID={contentDetails.id} />
            </section>
        </main>
    )
}

export default ContentDetails;