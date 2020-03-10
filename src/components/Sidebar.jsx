import React from 'react';
import {ItemSidebar} from '.';
import {ListGroup} from 'react-bootstrap';
import DataContainer from '../containers/DataContainer';

const query = `
    query Myquery {
        allCategories{
            id
            slug
            name
        }
    }`
const Sidebar = ({ allCategories }) => {
    return(
        <ListGroup as="ul">
            {allCategories.map( (category, index) =>    
                <ItemSidebar key={index} {...category} />
            )}
        </ListGroup>
    )
}

export default () =>
  <DataContainer
    query={query}
    component={Sidebar}
  />
;
