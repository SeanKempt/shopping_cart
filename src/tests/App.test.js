import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Shop from '../components/Shop';
import Cart from '../components/Cart';
import item1 from '../images/keycaps1.jpg';

describe('Shop component', () => {
  it('renders shop component correctly', () => {
    render(<Shop />);
    const element = screen.getByRole('main');
    expect(element).toBeInTheDocument();
  });

  it('When user clicks on add to bag, the item is added to the cart', () => {});
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

  const handleIncrease = jest.fn((cart.bag[0].quantity += 1));
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

  it('provides running total of all items in cart', async () => {
    render(<Cart cart={cart} handleIncrease={handleIncrease} />);
    const totalElement = screen.getByText(/total: \$20\.99/i);
    const itemQuantity = screen.getByTestId('item-quantity');
    const increaseButton = screen.getByRole('button', {
      name: '+',
    });
    expect(itemQuantity.textContent).toBe('1');
    await userEvent.click(increaseButton);
    expect(itemQuantity.textContent).toBe('2');
    expect(totalElement.textContent).toBe('Total: $41.98');
  });
});
