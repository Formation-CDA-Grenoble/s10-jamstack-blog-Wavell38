import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ItemSidebar = ({ name, slug }) => {
    return(
        <ListGroup.Item as="li">
            <Link to={`/category/${slug}`}>{ name }</Link>
        </ListGroup.Item>

    )
}
export default ItemSidebar;