import './FeaturedContainer.scss';
import FeaturedCard from "../FeaturedCard/FeaturedCard";
import ApoImoApi from "../../classes/apo-imo-api";
import { useEffect, useState } from "react";

function FeaturedContainer() {
    const apoImoApi = new ApoImoApi();
    const [featuredContents, setFeaturedContents] = useState([]);

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
                <FeaturedCard
                    key={featuredContent.id}
                    featuredContent={featuredContent}
                />
            ))}
        </div>)
}

export default FeaturedContainer;