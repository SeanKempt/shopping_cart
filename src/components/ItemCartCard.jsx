import PropTypes from 'prop-types';

const ItemCartCard = ({ product, img, price }) => (
  <div>
    <div className="card mb-3 cart-card-container">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={img} className="img-fluid rounded-start" alt={product} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{product}</h5>
            <p className="card-text">{price}</p>
            <div className="card-text">
              <div className="item-incrementor">
                <button type="button">-</button>
                <p className="item-quantity">5</p>
                <button type="button">+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

ItemCartCard.propTypes = {
  product: PropTypes.string,
  img: PropTypes.string,
  price: PropTypes.string,
};

export default ItemCartCard;
