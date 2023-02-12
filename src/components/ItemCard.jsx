import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ItemCard = ({ productName, img, price, handleAddToCart, item }) => (
  <Card className="card-container">
    <div className="card-image-container">
      <Card.Img variant="top" src={img} className="card-imgs" />
    </div>
    <Card.Body>
      <Card.Title>{productName}</Card.Title>
      <Card.Text>{price}</Card.Text>
      <Button onClick={() => handleAddToCart(item)} variant="primary">
        Add to cart
      </Button>
    </Card.Body>
  </Card>
);

ItemCard.propTypes = {
  productName: PropTypes.string,
  img: PropTypes.string,
  price: PropTypes.number,
  handleAddToCart: PropTypes.func,
  item: PropTypes.object,
};

export default ItemCard;
