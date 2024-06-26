import './CategoriesContainer.scss';
import ApoImoApi from '../../classes/apo-imo-api';
import CTA from '../../components/CTA/CTA';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function CategoriesContainer() {

    const apoImoApi = new ApoImoApi();
    const [categories, setCategories] = useState([]);
    const [isActive, setIsActive] = useState('');
    const clickHandler = (url) => {
        setIsActive(url);
    }

    useEffect(() => {
        async function getCategories() {
            try {
                const response = await apoImoApi.getCategories();
                setCategories(response.data);
            } catch (error) {
                console.log("Error fetching featured content", error)
            }
        }
        getCategories();
    }, []);
    if (categories.length === 0) {
        return <p>Loading categories...</p>
    };

    return (
        <section className="categories-container">
            {categories.map((category) => (
                <Link onClick={() => clickHandler(`/categories/${category.category_id}`)} to={`/categories/${category.category_id}`}
                    key={category.category_id}>
                    <CTA componentClass={`${isActive === `/categories/${category.category_id}` ? "categories-container__category active" : "categories-container__category"}`}
                        componentText={category.category_name} />
                </Link>
            ))}
        </section>
    )
}

export default CategoriesContainer;