import { formatCurrency } from '../../utils/helpers';
import PropTypes from 'prop-types';
import Button from '../../ui/Button';
function OrderItem({ item }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <div className="flex items-center justify-between gap-4">
          <p className="font-bold">{formatCurrency(totalPrice)}</p>
          <Button type="small">Delete</Button>
        </div>
      </div>
    </li>
  );
}
OrderItem.propTypes = {
  item: PropTypes.shape({
    quantity: PropTypes.number,
    name: PropTypes.string,
    totalPrice: PropTypes.number,
  }).isRequired,
};
export default OrderItem;
