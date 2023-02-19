import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Shop from '../components/Shop';
import Cart from '../components/Cart';
import item1 from '../images/keycaps1.jpg';

describe('Shop component', () => {
  const handleAddToCart = jest.fn();

  it('renders shop component correctly', () => {
    render(<Shop />);
    const element = screen.getByRole('main');
    expect(element).toBeInTheDocument();
  });

  it('When user clicks on add to bag, the add to cart handler is called', async () => {
    render(<Shop handleAddToCart={handleAddToCart} />);
    const cardElement = screen.getByText(/see through key caps/i);
    const atcButtons = screen.getAllByRole('button', { name: 'Add to cart' });
    expect(cardElement).toBeInTheDocument();
    await userEvent.click(atcButtons[0]);
    expect(handleAddToCart).toBeCalledTimes(1);
  });
});

describe('Cart component functionality', () => {
  const cart = {
    bag: [
      {
        product: {
          id: 0,
          productName: 'Japanese Key Caps',
          price: 20.99,
          image: item1,
        },
        quantity: 1,
      },
    ],
    total: 20.99,
  };
  const handleIncrease = jest.fn();
  const handleDecrease = jest.fn();

  it('renders cart correctly', () => {
    render(<Cart cart={cart} />);
    const element = screen.getByRole('main');
    expect(element).toBeInTheDocument();
  });

  it('increases quantity of item in cart when pressing increase button', async () => {
    render(<Cart cart={cart} handleIncrease={handleIncrease} />);
    const increaseButton = screen.getByRole('button', {
      name: '+',
    });
    expect(handleIncrease).toBeCalledTimes(0);
    await userEvent.click(increaseButton);
    expect(handleIncrease).toBeCalledTimes(1);
  });

  it('decreases quantity of item in cart when pressing decrease button', async () => {
    render(<Cart cart={cart} handleDecrease={handleDecrease} />);
    const decreaseButton = screen.getByRole('button', {
      name: '-',
    });
    expect(handleDecrease).toBeCalledTimes(0);
    await userEvent.click(decreaseButton);
    expect(handleDecrease).toBeCalledTimes(1);
  });

  it('calls the handleIncrease onclick handler when hitting the increase button', async () => {
    render(<Cart cart={cart} handleIncrease={handleIncrease} />);
    const itemQuantity = screen.getByTestId('item-quantity');
    const increaseButton = screen.getByRole('button', { name: '+' });
    handleIncrease.mockImplementation(() => (itemQuantity.textContent = 2));
    expect(itemQuantity.textContent).toBe('1');
    await userEvent.click(increaseButton);
    expect(itemQuantity.textContent).toBe('2');
  });
});
