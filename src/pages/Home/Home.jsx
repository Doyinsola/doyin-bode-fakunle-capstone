import './Home.scss';
import FeaturedContainer from "../../components/FeaturedContainer/FeaturedContainer";
import CategoryContainer from "../../components/CategoriesContainer/CategoriesContainer";

function Home() {
    return (
        <main className="home">
            <CategoryContainer />
            <FeaturedContainer />
        </main>
    )
}

export default Home;