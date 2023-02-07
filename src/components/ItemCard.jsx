import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ItemCard = ({ product, img, price }) => (
  <Card className="card-container">
    <div className="card-image-container">
      <Card.Img variant="top" src={img} className="card-imgs" />
    </div>
    <Card.Body>
      <Card.Title>{product}</Card.Title>
      <Card.Text>{price}</Card.Text>
      <Button variant="primary">Add to cart</Button>
    </Card.Body>
  </Card>
);

ItemCard.propTypes = {
  product: PropTypes.string,
  img: PropTypes.string,
  price: PropTypes.number,
};

export default ItemCard;
