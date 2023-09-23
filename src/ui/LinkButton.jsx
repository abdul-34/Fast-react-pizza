import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
function LinkButton({ children, to }) {
  const className = 'text-sm text-blue-500 hover:text-blue-600 hover:underline';
  const navigate = useNavigate();
  if (to === '-1') {
    return <button onClick={() => navigate(-1)} className={className}>&larr; Go back</button>;
  }
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}
LinkButton.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};
export default LinkButton;
