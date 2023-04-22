import './category.styles.scss'
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/categories.contexts';
import ProductCard from '../../components/product-card/product-card.component';

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducsts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducsts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <>
        <h2 className='category-title'>{category.toUpperCase()}</h2>
        <div className='category-container'>
            {products &&
                products.map((product) => (<ProductCard key={product.id} product={product} />))                                                   
            }
        </div>
        </>
    )
}
export default Category;