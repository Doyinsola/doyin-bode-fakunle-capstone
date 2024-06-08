import './CategoryContent.scss';
import { useParams } from "react-router-dom";
import CategoryContainer from "../../components/CategoriesContainer/CategoriesContainer";
import ContentContainer from "../../components/ContentContainer/ContentContainer";

function CategoryContent() {
    const { id } = useParams();

    return (<main className="category-content">
        <CategoryContainer />
        <ContentContainer
            categoryID={id}
        />
    </main>)
}

export default CategoryContent;