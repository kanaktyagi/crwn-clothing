import { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/product-card/product-card.component';
import { CategoriesContext } from '../../contexts/categories.context';
import { selectCategoriesMap } from '../../store/categories/category.selector';
import './category.styles.scss'
import { useSelector } from 'react-redux';
const Category = () => {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap)
    // const { categoriesMap } = useContext(CategoriesContext)
    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(() => {
        console.log("hi from category")
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (
        <div className='category-container'>
            {products &&
                products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
        </div>
    )
}

export default Category