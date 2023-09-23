import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { addItem, getCartCurrentQuantityById } from '../cart/cartSlice';
import DeleteItem from '../cart/DeleteItem';
import UpdatingItemQuantity from '../cart/UpdatingItemQuantity';
function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  // const currentQuantity = useSelector(getCartCurrentQuantityById(id));
  const currentQuantity = useSelector(getCartCurrentQuantityById(id));
  const inCart = currentQuantity > 0;
  console.log(inCart);
  function handleAddNewItem() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }
  return (
    <li className="flex gap-4 py-4">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
      />
      <div className="flex grow flex-col">
        <p className="font-medium">{name}</p>
        <p className="capitalize italic text-stone-500">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase">Sold out</p>
          )}
          {inCart && (
            <div className="flex items-center gap-6 sm:gap-8">
              <UpdatingItemQuantity
                pizzaId={id}
                currentQuantity={currentQuantity}
              />
              <DeleteItem pizzaId={id} />
            </div>
          )}
          {!soldOut && !inCart && (
            <Button type="small" onClick={handleAddNewItem}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}
MenuItem.propTypes = {
  pizza: PropTypes.shape({
    // id: PropTypes.number.isRequired,
    name: PropTypes.string,
    unitPrice: PropTypes.number,
    ingredients: PropTypes.array,
    soldOut: PropTypes.bool,
    imageUrl: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};
export default MenuItem;
