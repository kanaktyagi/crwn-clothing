import { useContext } from "react"
import CategoryPreview from "../../category-preview/category-preview.component";
import { CategoriesContext } from "../../contexts/categories.context";
import { selectCategoriesMap } from "../../store/categories/category.selector";
import { useSelector } from "react-redux";


const CategoriesPreview = () => {
    // const { categoriesMap } = useContext(CategoriesContext)

    const categoriesMap = useSelector(selectCategoriesMap)
    return (
        <div>
            {
                Object.keys(categoriesMap).map(title => {
                    const products = categoriesMap[title];

                    return <CategoryPreview key={title} title={title} products={products} />
                })
            }

        </div>
    )
}

export default CategoriesPreview 