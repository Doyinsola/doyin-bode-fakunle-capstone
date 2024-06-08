import './FeaturedContainer.scss';
import Card from "../Card/Card";
import ApoImoApi from "../../classes/apo-imo-api";
import { useEffect, useState } from "react";

function FeaturedContainer() {
    const apoImoApi = new ApoImoApi();
    const [featuredContents, setFeaturedContents] = useState([]);
    const serverURL = process.env.REACT_APP_SERVER_URL;


    useEffect(() => {
        async function getFeatureContent() {
            try {
                const response = await apoImoApi.getFeaturedContent();
                setFeaturedContents(response.data);
            } catch (error) {
                console.log("Error fetching featured content", error)
            }
        }
        getFeatureContent()
    }, []);
    if (featuredContents.length === 0) {
        return <p>Loading featured content...</p>
    }
    return (
        <div className="featured-container">
            {featuredContents.map((featuredContent) => (
                <Card
                    key={featuredContent.id}
                    featuredContent={featuredContent}
                    imgSrc={`${serverURL}/${featuredContent.image_URL}`}
                    title={featuredContent.name}
                    about={featuredContent.about}
                />
            ))}
        </div>)
}

export default FeaturedContainer;