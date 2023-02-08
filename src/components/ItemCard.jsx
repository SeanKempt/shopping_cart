import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ItemCard = ({ product, img, price, handleAddToCart, item }) => (
  <Card className="card-container">
    <div className="card-image-container">
      <Card.Img variant="top" src={img} className="card-imgs" />
    </div>
    <Card.Body>
      <Card.Title>{product}</Card.Title>
      <Card.Text>{price}</Card.Text>
      <Button onClick={() => handleAddToCart(item)} variant="primary">
        Add to cart
      </Button>
    </Card.Body>
  </Card>
);

ItemCard.propTypes = {
  product: PropTypes.string,
  img: PropTypes.string,
  price: PropTypes.string,
  handleAddToCart: PropTypes.func,
  item: PropTypes.object,
};

export default ItemCard;
