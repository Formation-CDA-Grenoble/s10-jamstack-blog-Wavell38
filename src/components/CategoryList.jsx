import React from 'react';
import { CategoryPreview } from '.';

const CategoryList = ({ allCategories, allArticles }) => {
    return (
        <ul>
            { allCategories.map( (category, index) => { 
                let count = allArticles.reduce((ac, article) => {
                    let result = (article.category.id === category.id)?1:0;
                    return ac + result;
                }, 0);

                console.log(count)

                return (
                    <li key={index}>
                        <CategoryPreview { ...category } count={ count } />
                    </li>
                )
            })} 
        </ul>
    )
}
; 

export default CategoryList;
