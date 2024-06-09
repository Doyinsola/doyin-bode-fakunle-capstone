import './ContentContainer.scss';
import ApoImoApi from '../../classes/apo-imo-api';
import Card from '../Card/Card';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ContentContainer({ categoryID }) {

    const apoImoApi = new ApoImoApi();
    const [categoryContents, setCategoryContents] = useState([]);
    const serverURL = process.env.REACT_APP_SERVER_URL;

    useEffect(() => {
        async function getCategoryContent() {
            try {
                const response = await apoImoApi.getCategoryContent(categoryID);
                setCategoryContents(response.data);
            } catch (error) {
                console.log("Error fetching category content", error)
            }
        }
        getCategoryContent()
    }, [categoryID]);

    if (categoryContents.length === 0) {
        return <p>Loading category content...</p>
    }

    return (
        <section className='content-container'>
            {categoryContents.map((categoryContent) => (
                <Card
                    key={categoryContent.id}
                    imgSrc={`${serverURL}/${categoryContent.image_URL}`}
                    title={categoryContent.name}
                    about={categoryContent.about}
                    id={categoryContent.id}
                />
            ))}
        </section>
    )
}

export default ContentContainer;