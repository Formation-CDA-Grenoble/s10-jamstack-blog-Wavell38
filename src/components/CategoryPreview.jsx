import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CategoryPreview = ({ name, description, slug, count }) =>
  <Card>
    <Card.Header as="h3">
      {name}
    </Card.Header>
    <Card.Body>
      {description}
      <div style={{ paddingTop: 20 }}>
        <Link to={`/category/${slug}`}>
          <Button variant="primary">Go to articles...</Button>
        </Link>
        <Badge variant="secondary" style={{ marginLeft: 20 }}>{`${count} articles`}</Badge>
      </div>
    </Card.Body>
  </Card>
;

export default CategoryPreview;
