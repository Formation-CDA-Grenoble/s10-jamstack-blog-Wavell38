import React from 'react';
import { CategoryList, Layout } from '../components';
import DataContainer from '../containers/DataContainer';

const query = `
    query Myquery {
        allCategories{
            id
            slug
            name
            description
        }
        allArticles{
            id
            category {
                id
            }
        }
    }`
const Categories = ({ allCategories, allArticles }) => {
    return(
        <Layout>
            <CategoryList allCategories={ allCategories } allArticles={ allArticles } />
        </Layout>
    )
}

export default () =>
  <DataContainer
    query={query}
    component={Categories}
  />
;
