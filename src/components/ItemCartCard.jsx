import PropTypes from 'prop-types';

// This component is used for the Cart component only. Different from ItemCard.

const ItemCartCard = ({
  productName,
  img,
  price,
  quantity,
  item,
  handleIncrease,
  handleDecrease,
}) => (
  <div className="card-wrapper">
    <main className="card mb-3 cart-card-container">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={img}
            className="img-fluid rounded-start"
            alt={productName}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{productName}</h5>
            <p className="card-text">${price}</p>
            <div className="card-text">
              <div className="item-incrementor">
                <button
                  name="decrease-button"
                  onClick={() => handleDecrease(item)}
                  type="button"
                >
                  -
                </button>
                <p data-testid="item-quantity" className="item-quantity">
                  {quantity}
                </p>
                <button
                  name="increase-button"
                  onClick={() => handleIncrease(item)}
                  type="button"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
);

ItemCartCard.propTypes = {
  productName: PropTypes.string,
  img: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  item: PropTypes.object,
  handleDecrease: PropTypes.func,
  handleIncrease: PropTypes.func,
};

export default ItemCartCard;
