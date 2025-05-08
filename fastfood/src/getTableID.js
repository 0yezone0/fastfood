import { useLocation } from 'react-router-dom';

function OrderPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const tableId = queryParams.get('id');
  return tableId;
}

export default OrderPage;