import './Home.scss';
import FeaturedContainer from "../../components/FeaturedContainer/FeaturedContainer";
import CategoryContainer from "../../components/CategoriesContainer/CategoriesContainer";

function Home() {
    return (
        <div className="home">
            <CategoryContainer />
            <FeaturedContainer />
        </div>
    )
}

export default Home;